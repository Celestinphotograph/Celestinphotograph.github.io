/* ============================================================
   Celestin Photograph · 分类页 / 影集页
   key = 'all' 时展示全部图集（“影集”入口）
   ============================================================ */
window.CP.category = (function () {
    'use strict';

    var DATA = window.SITE_DATA || {};

    /* 一个图集：大封面 + 右下角张数 + 下方居中「绿色分类 / 大字标题」 */
    function albumHTML(album) {
        var cat = CP.utils.getCat(album.category);
        return '' +
            '<div class="category-album">' +
                '<div class="album-media" data-album="' + CP.utils.esc(album.id) + '">' +
                    '<img src="' + CP.utils.esc(CP.coverUrl(album)) + '" alt="' + CP.utils.esc(album.title) + '" loading="lazy">' +
                    '<span class="album-count">' + (album.images ? album.images.length : 0) + '</span>' +
                '</div>' +
                '<div class="album-info">' +
                    '<span class="cat-tag">' + CP.utils.esc(cat.name) + '</span>' +
                    '<div class="album-title" data-album="' + CP.utils.esc(album.id) + '">' + CP.utils.esc(album.title) + '</div>' +
                '</div>' +
            '</div>';
    }

    function render(key) {
        var isAll = (key === 'all');
        var heading = isAll ? '影集' : CP.utils.getCat(key).name;
        var albums = isAll
            ? (DATA.albums || [])
            : (DATA.albums || []).filter(function (a) { return a.category === key; });

        var html = '<div class="page">' +
            '<div class="page-heading">' + CP.utils.esc(heading) + '</div>';

        if (!albums.length) {
            html += '<p style="text-align:center;color:#999;padding:60px 0 80px;">该分类暂无图集</p>';
        } else {
            html += albums.map(albumHTML).join('');
        }

        html += '</div>';
        CP.els.viewCategory.innerHTML = html;

        // 点击打开图集
        CP.els.viewCategory.querySelectorAll('[data-album]').forEach(function (n) {
            n.addEventListener('click', function () {
                CP.viewer.open(n.getAttribute('data-album'), 0);
            });
        });
    }

    return { render: render };
})();
