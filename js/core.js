/* ============================================================
   Celestin Photograph · 核心模块
   工具函数 / 站点信息 / 顶部双栏 / 路由 / Toast
   ============================================================ */
window.CP = (function () {
    'use strict';

    var DATA = window.SITE_DATA || {};

    /* ---------------- 小工具 ---------------- */
    function esc(s) {
        return String(s == null ? '' : s)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
    function getCat(key) {
        return (DATA.categories || []).find(function (c) { return c.key === key; }) || { key: key, name: key };
    }
    function getAlbum(id) {
        return (DATA.albums || []).find(function (a) { return a.id === id; });
    }
    function coverUrl(album) {
        if (!album) return '';
        if (album.cover) return album.cover;
        return (album.images && album.images.length) ? album.images[0].url : '';
    }
    function $id(id) { return document.getElementById(id); }

    /* ---------------- 图标（内联 SVG，便于随 currentColor 变色） ---------------- */
    var ICONS = {
        // 上箭头（展开状态，素材 24gl-arrowUp2）
        up: '<svg viewBox="0 0 1024 1024" width="18" height="18" fill="currentColor"><path d="M533.333333 256a21.266667 21.266667 0 0 0-15.086666 6.246667l-426.666667 426.666666a21.333333 21.333333 0 0 0 30.173333 30.173334L533.333333 307.5l411.58 411.586667a21.333333 21.333333 0 0 0 30.173334-30.173334l-426.666667-426.666666A21.266667 21.266667 0 0 0 533.333333 256z"/></svg>',
        // 下箭头（收起状态，素材 箭头_列表收起）
        down: '<svg viewBox="0 0 1024 1024" width="18" height="18" fill="currentColor"><path d="M721.833102 597.433606l-60.943176 60.943176-211.189226-211.189225L510.643877 386.244381z"/><path d="M299.323503 597.30514l60.943176 60.943176 211.189226-211.189225L510.512728 386.115915z"/></svg>',
        menu: '<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
        close: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
        prev: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>',
        next: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>'
    };

    /* ---------------- 全局状态 ---------------- */
    var state = {
        bar2Expanded: true,   // 第二栏是否展开（箭头控制，记忆状态）
        lastScrollY: 0,
        headerHidden: false
    };
    var els = {};

    /* ============================================================
       顶部双栏：展开/收起 + 滚动隐藏 + 右上“更多”
       ============================================================ */
    function getCssVarInt(name) {
        var v = getComputedStyle(document.documentElement).getPropertyValue(name);
        return parseInt(v, 10) || 0;
    }

    function updateBodyPadding() {
        if (state.headerHidden) { document.body.style.paddingTop = '0px'; return; }
        var bar1H = getCssVarInt('--bar1-h');
        var bar2H = state.bar2Expanded ? getCssVarInt('--bar2-h') : 0;
        document.body.style.paddingTop = (bar1H + bar2H) + 'px';
    }

    function syncBars() {
        els.bar2.classList.toggle('bar2-collapsed', !state.bar2Expanded);
        els.barToggle.classList.toggle('collapsed', !state.bar2Expanded);
        updateBodyPadding();
    }

    function hideHeader() {
        if (state.headerHidden) return;
        state.headerHidden = true;
        els.header.classList.add('header-hidden');
        updateBodyPadding();
    }
    function showHeader() {
        if (!state.headerHidden) return;
        state.headerHidden = false;
        els.header.classList.remove('header-hidden');
        updateBodyPadding();
    }

    function bindHeaderEvents() {
        // 左上角箭头：展开 / 收回第二栏（记忆状态）
        els.barToggle.addEventListener('click', function () {
            state.bar2Expanded = !state.bar2Expanded;
            syncBars();
        });

        // 滚轮：向下收起两栏，向上再次出现（保留第二栏的展开/收起记忆）
        window.addEventListener('scroll', function () {
            var y = window.scrollY;
            var delta = y - state.lastScrollY;
            if (y > 90 && delta > 6) {
                hideHeader();
            } else if (delta < -6 || y < 10) {
                showHeader();
            }
            state.lastScrollY = y;
        }, { passive: true });

        // 右上角“更多”按钮：切换下拉面板（内容待补充，仅保留交互）
        els.moreBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            els.morePanel.classList.toggle('open');
        });
        document.addEventListener('click', function (e) {
            if (!els.morePanel.classList.contains('open')) return;
            if (!els.morePanel.contains(e.target) && e.target !== els.moreBtn) {
                els.morePanel.classList.remove('open');
            }
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') els.morePanel.classList.remove('open');
        });
    }

    /* ---------------- Toast ---------------- */
    var toastTimer = null;
    function showToast(msg) {
        var t = $id('toast');
        if (!t) {
            t = document.createElement('div');
            t.id = 'toast';
            document.body.appendChild(t);
        }
        t.textContent = msg;
        t.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(function () { t.classList.remove('show'); }, 1800);
    }

    /* ============================================================
       导航渲染 / 路由
       ============================================================ */
    function renderNav(activeType, activeKey) {
        var html = '<a href="#/" data-nav="home">首页</a>';
        DATA.categories.forEach(function (c) {
            html += '<a href="#/' + esc(c.key) + '" data-nav="cat" data-key="' + esc(c.key) + '">' + esc(c.name) + '</a>';
        });
        html += '<a href="#/albums" data-nav="albums">影集</a>';
        els.nav.innerHTML = html;

        els.nav.querySelectorAll('a').forEach(function (a) {
            var n = a.getAttribute('data-nav');
            var active = false;
            if (activeType === 'home') active = (n === 'home');
            else if (activeType === 'albums') active = (n === 'albums');
            else if (activeType === 'category') active = (n === 'cat' && a.getAttribute('data-key') === activeKey);
            a.classList.toggle('active', active);
        });
    }

    function parseHash() {
        var h = window.location.hash.replace(/^#\/?/, '');
        if (!h || h === 'home') return { type: 'home' };
        if (h === 'albums') return { type: 'albums' };
        if (getCat(h).key === h) return { type: 'category', key: h };
        return { type: 'home' };
    }

    function applyRoute() {
        var r = parseHash();
        if (r.type === 'home') {
            els.viewCategory.classList.remove('active');
            els.viewHome.classList.add('active');
            if (CP.home) CP.home.render();
            renderNav('home');
        } else {
            els.viewHome.classList.remove('active');
            els.viewCategory.classList.add('active');
            if (r.type === 'category') {
                if (CP.category) CP.category.render(r.key);
                renderNav('category', r.key);
            } else {
                if (CP.category) CP.category.render('all');
                renderNav('albums');
            }
        }
        window.scrollTo({ top: 0, behavior: 'auto' });
        showHeader();
    }

    /* ---------------- 初始化（由 app.js 调用） ---------------- */
    function init() {
        els = {
            header: $id('siteHeader'),
            bar1: $id('bar1'),
            bar2: $id('bar2'),
            barToggle: $id('barToggle'),
            moreBtn: $id('moreBtn'),
            morePanel: $id('morePanel'),
            nav: $id('mainNav'),
            viewHome: $id('view-home'),
            viewCategory: $id('view-category'),
            viewer: $id('viewer'),
            viewerBackdrop: $id('viewerBackdrop'),
            viewerClose: $id('viewerClose'),
            viewerPrev: $id('viewerPrev'),
            viewerNext: $id('viewerNext'),
            viewerStage: $id('viewerStage'),
            viewerTitle: $id('viewerTitle'),
            viewerCount: $id('viewerCount'),
            viewerNote: $id('viewerNote'),
            footerName: $id('footerName'),
            footerCopy: $id('footerCopy')
        };

        // 站点信息
        if (DATA.site) {
            if (DATA.site.name) document.title = DATA.site.name;
            if (els.footerName) els.footerName.textContent = DATA.site.name;
            if (els.footerCopy && DATA.site.copyright) els.footerCopy.textContent = DATA.site.copyright;
        }

        // 立即暴露 els / state，供 home / category / viewer 渲染时使用
        window.CP.els = els;
        window.CP.state = state;

        // 顶栏图标
        if (els.barToggle) {
            els.barToggle.innerHTML = '<span class="icon icon-up">' + ICONS.up + '</span>' +
                                      '<span class="icon icon-down">' + ICONS.down + '</span>';
        }
        if (els.moreBtn) els.moreBtn.innerHTML = ICONS.menu;

        bindHeaderEvents();
        syncBars();

        // 路由
        window.addEventListener('hashchange', applyRoute);
        applyRoute();

        // 暴露给其它模块
        window.CP.els = els;
        window.CP.state = state;
        window.CP.utils = { esc: esc, getCat: getCat, getAlbum: getAlbum, coverUrl: coverUrl, $id: $id, showToast: showToast };
    }

    return {
        init: init,
        els: els,
        state: state,
        utils: { esc: esc, getCat: getCat, getAlbum: getAlbum, coverUrl: coverUrl, $id: $id, showToast: showToast },
        ICONS: ICONS,
        getAlbum: getAlbum,
        getCat: getCat,
        coverUrl: coverUrl
    };
})();
