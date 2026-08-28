/* ============================================================
   Celestin Photograph · 首页（大图区 + 横向滚动区）
   ============================================================ */
window.CP.home = (function () {
    'use strict';

    var DATA = window.SITE_DATA || {};

    function albumLink(album) {
        return 'data-album="' + CP.utils.esc(album.id) + '"';
    }

    /* 大图区：一张大封面 + 下方居中「绿色分类 / 大字图集名」 */
    function featuredHTML(album) {
        var cat = CP.utils.getCat(album.category);
        return '' +
            '<section class="home-section featured">' +
                '<div class="featured-media" ' + albumLink(album) + '>' +
                    '<img src="' + CP.utils.esc(CP.coverUrl(album)) + '" alt="' + CP.utils.esc(album.title) + '" loading="lazy">' +
                '</div>' +
                '<div class="featured-info">' +
                    '<span class="cat-tag">' + CP.utils.esc(cat.name) + '</span>' +
                    '<div class="album-title" ' + albumLink(album) + '>' + CP.utils.esc(album.title) + '</div>' +
                '</div>' +
            '</section>';
    }

    /* 横向滚动区：一排图集卡片（图片 + 分类 + 标题），带左右箭头 */
    function scrollerHTML(albums) {
        var cards = albums.map(function (a) {
            var cat = CP.utils.getCat(a.category);
            return '' +
                '<div class="scroller-card" ' + albumLink(a) + '>' +
                    '<div class="card-media"><img src="' + CP.utils.esc(CP.coverUrl(a)) + '" alt="' + CP.utils.esc(a.title) + '" loading="lazy"></div>' +
                    '<div class="card-info">' +
                        '<span class="cat-tag">' + CP.utils.esc(cat.name) + '</span>' +
                        '<div class="album-title">' + CP.utils.esc(a.title) + '</div>' +
                    '</div>' +
                '</div>';
        }).join('');

        return '' +
            '<section class="home-section scroller">' +
                '<div class="scroller-track">' + cards + '</div>' +
                '<button class="scroller-arrow prev" aria-label="上一组">' + CP.ICONS.prev + '</button>' +
                '<button class="scroller-arrow next" aria-label="下一组">' + CP.ICONS.next + '</button>' +
            '</section>';
    }

    function render() {
        var el = CP.els.viewHome;
        var sections = (DATA.home && DATA.home.sections) || [];
        var html = '<div class="home">';

        sections.forEach(function (sec) {
            if (sec.type === 'featured') {
                var a = CP.utils.getAlbum(sec.albumId);
                if (a) html += featuredHTML(a);
            } else if (sec.type === 'scroller') {
                var albums = (sec.albumIds || []).map(CP.utils.getAlbum).filter(Boolean);
                if (albums.length) html += scrollerHTML(albums);
            }
        });

        html += '</div>';
        el.innerHTML = html;

        // 滚动区左右箭头
        el.querySelectorAll('.scroller').forEach(function (sc) {
            var track = sc.querySelector('.scroller-track');
            var prev = sc.querySelector('.prev');
            var next = sc.querySelector('.next');
            var step = function () {
                var c = track.querySelector('.scroller-card');
                return c ? c.offsetWidth + 26 : 340;
            };
            if (prev) prev.addEventListener('click', function () { track.scrollBy({ left: -step(), behavior: 'smooth' }); });
            if (next) next.addEventListener('click', function () { track.scrollBy({ left: step(), behavior: 'smooth' }); });
        });

        // 点击打开图集
        el.querySelectorAll('[data-album]').forEach(function (n) {
            n.addEventListener('click', function () {
                CP.viewer.open(n.getAttribute('data-album'), 0);
            });
        });
    }

    return { render: render };
})();
