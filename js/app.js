/* ============================================================
   Celestin Photograph · 启动入口
   ============================================================ */
(function () {
    'use strict';

    function boot() {
        // 初始化核心（顶栏、导航、路由），再绑定查看器事件
        CP.init();
        if (CP.viewer && CP.viewer.bindEvents) {
            CP.viewer.bindEvents();
            // 查看器按钮图标
            if (CP.els.viewerPrev) CP.els.viewerPrev.innerHTML = CP.ICONS.prev;
            if (CP.els.viewerNext) CP.els.viewerNext.innerHTML = CP.ICONS.next;
            if (CP.els.viewerClose) CP.els.viewerClose.innerHTML = CP.ICONS.close;
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot);
    } else {
        boot();
    }
})();
