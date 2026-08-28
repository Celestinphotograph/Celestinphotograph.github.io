/* ============================================================
   Celestin Photograph · 图集详情查看器
   - 图片靠左展示（不居中），横图/竖图排版不同
   - 鼠标移动显示左右切换键，静止隐藏；首次打开短暂提示
   - 键盘 ← → 切换、ESC 关闭、点击背景关闭
   - 移动端左右滑动切换
   ============================================================ */
window.CP.viewer = (function () {
    'use strict';

    var st = {
        album: null,
        index: 0,
        idleTimer: null,
        hintTimer: null,
        touchX: 0,
        touchY: 0,
        opened: false
    };

    function currentImg() {
        return st.album.images[st.index];
    }

    /* ---- 首次/切换后短暂亮出左右键 ---- */
    function showNavHint(ms) {
        CP.els.viewer.classList.add('show-nav');
        clearTimeout(st.hintTimer);
        st.hintTimer = setTimeout(function () {
            CP.els.viewer.classList.remove('show-nav');
        }, ms || 1600);
    }

    /* ---- 根据图片比例切换横/竖排版 ---- */
    function setOrientation(img) {
        var v = CP.els.viewer;
        v.classList.remove('is-portrait', 'is-landscape', 'is-square');
        var w = img.naturalWidth, h = img.naturalHeight;
        if (!w || !h) { v.classList.add('is-square'); return; }
        var ratio = w / h;
        if (ratio > 1.05) v.classList.add('is-landscape');
        else if (ratio < 0.95) v.classList.add('is-portrait');
        else v.classList.add('is-square');
    }

    /* ---- 文字窗口：有说明显示说明，无说明显示“待补充”占位 ---- */
    function renderNote() {
        var img = currentImg();
        var note = CP.els.viewerNote;
        var cap = (img.caption || '').toString().trim();
        if (cap) {
            note.innerHTML = '<div class="note-text">' + CP.utils.esc(cap) + '</div>';
        } else {
            note.innerHTML = '<div class="note-empty">文字说明待补充</div>';
        }
    }

    function renderPhoto() {
        var img = currentImg();
        var stage = CP.els.viewerStage;

        // 新图片节点（带淡入动画）
        stage.innerHTML = '';
        var el = document.createElement('img');
        el.alt = st.album.title;
        el.draggable = false;
        el.src = img.url;
        el.onload = function () {
            setOrientation(el);
            el.classList.add('loaded');
        };
        el.onerror = function () {
            setOrientation(null);
            el.classList.add('loaded');
            el.style.background = '#e8e8e8';
        };
        stage.appendChild(el);

        // 标题 / 页码 / 文字窗口
        CP.els.viewerTitle.textContent = st.album.title;
        CP.els.viewerCount.textContent = (st.index + 1) + ' / ' + st.album.images.length;
        renderNote();
    }

    /* ---- 打开 ---- */
    function open(albumId, index) {
        var album = CP.utils.getAlbum(albumId);
        if (!album || !album.images || !album.images.length) return;

        st.album = album;
        st.index = index || 0;

        renderPhoto();

        CP.els.viewer.classList.add('open');
        st.opened = true;
        document.body.style.overflow = 'hidden';

        // 首次打开：短暂提示左右切换键
        showNavHint(2500);

        // 支持浏览器“返回”关闭查看器
        try { history.pushState({ cpViewer: true }, '', location.hash); } catch (e) {}
    }

    /* ---- 关闭 ---- */
    function close() {
        if (!st.opened) return;
        st.opened = false;
        CP.els.viewer.classList.remove('open', 'show-nav', 'is-portrait', 'is-landscape', 'is-square');
        document.body.style.overflow = '';
        clearTimeout(st.idleTimer);
        clearTimeout(st.hintTimer);
        st.album = null;
    }

    /* ---- 上一张 / 下一张 ---- */
    function go(step) {
        if (!st.album) return;
        var total = st.album.images.length;
        st.index = (st.index + step + total) % total;
        renderPhoto();
        showNavHint(1200);
    }

    function bindEvents() {
        var v = CP.els.viewer;

        // 鼠标移动 → 显示左右键；静止 2.2s → 隐藏
        v.addEventListener('mousemove', function () {
            if (!st.opened) return;
            v.classList.add('show-nav');
            clearTimeout(st.idleTimer);
            st.idleTimer = setTimeout(function () {
                v.classList.remove('show-nav');
            }, 2200);
        });

        // 点击背景关闭（点击图片 / 标题 / 计数 / 文字窗口不关闭）
        v.addEventListener('click', function (e) {
            if (e.target === CP.els.viewerBackdrop) close();
        });

        // 关闭按钮 / 左右键
        CP.els.viewerClose.addEventListener('click', close);
        CP.els.viewerPrev.addEventListener('click', function (e) { e.stopPropagation(); go(-1); });
        CP.els.viewerNext.addEventListener('click', function (e) { e.stopPropagation(); go(1); });

        // 键盘
        document.addEventListener('keydown', function (e) {
            if (!st.opened) return;
            if (e.key === 'Escape') close();
            else if (e.key === 'ArrowLeft') go(-1);
            else if (e.key === 'ArrowRight') go(1);
        });

        // 移动端：左右滑动切换
        v.addEventListener('touchstart', function (e) {
            st.touchX = e.touches[0].clientX;
            st.touchY = e.touches[0].clientY;
        }, { passive: true });
        v.addEventListener('touchend', function (e) {
            var dx = e.changedTouches[0].clientX - st.touchX;
            var dy = e.changedTouches[0].clientY - st.touchY;
            if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.4) {
                if (dx < 0) go(1);   // 左滑 → 下一张
                else go(-1);         // 右滑 → 上一张
            }
        }, { passive: true });

        // 浏览器返回关闭查看器
        window.addEventListener('popstate', function () {
            if (st.opened) close();
        });
    }

    return { open: open, close: close, go: go, bindEvents: bindEvents };
})();
