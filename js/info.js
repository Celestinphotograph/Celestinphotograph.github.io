/* ============================================================
   Celestin Photograph · 信息详情面板（关于我 / 联系我）
   - 同款白色面板 + 模糊背景
   - 左图右文（桌面端）/ 上图下文（移动端）
   - 彩蛋 → 复用图集查看器打开 easter-egg 图集
   ============================================================ */
window.CP.info = (function () {
    'use strict';

    var st = { opened: false };

    /* ---- 打开信息面板（type: 'about' | 'contact'） ---- */
    function open(type) {
        var data = window.SITE_DATA && window.SITE_DATA.info;
        if (!data || !data[type]) return;
        var item = data[type];
        st.opened = true;

        document.getElementById('infoTitle').textContent = item.title || '';
        document.getElementById('infoText').textContent = item.text || '';

        var img = document.getElementById('infoPhotoImg');
        if (item.photo) {
            img.src = item.photo;
            img.style.display = '';
        } else {
            img.style.display = 'none';
        }

        var modal = document.getElementById('infoModal');
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    /* ---- 关闭 ---- */
    function close() {
        if (!st.opened) return;
        st.opened = false;
        var modal = document.getElementById('infoModal');
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    /* ---- 事件绑定 ---- */
    function bindEvents() {
        // 更多信息面板里的每一项
        var items = document.querySelectorAll('.panel-item[data-info]');
        items.forEach(function (el) {
            el.addEventListener('click', function () {
                var type = el.getAttribute('data-info');

                // 关闭更多信息下拉面板
                var morePanel = document.getElementById('morePanel');
                if (morePanel) morePanel.classList.remove('open');

                if (type === 'easter') {
                    // 彩蛋 → 打开图集查看器（复用 viewer）
                    if (window.CP.viewer && window.CP.viewer.open) {
                        window.CP.viewer.open('easter-egg', 0);
                    }
                } else {
                    // 关于我 / 联系我 → 打开信息面板
                    open(type);
                }
            });
        });

        // 关闭按钮
        var closeBtn = document.getElementById('infoClose');
        if (closeBtn) closeBtn.addEventListener('click', close);

        // 点击背景关闭
        var backdrop = document.getElementById('infoBackdrop');
        if (backdrop) backdrop.addEventListener('click', close);

        // Esc 关闭
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && st.opened) close();
        });
    }

    return { open: open, close: close, bindEvents: bindEvents };
})();
