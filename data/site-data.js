/* ============================================================
 *  【 站点数据配置文件 】★ 你只需要编辑这一个文件
 * ============================================================
 *  这是整个网站唯一的数据源头。增删改图片、分类、标题、文字，
 *  都在这个文件里完成，首页 / 分类页 / 查看器会自动同步更新，
 *  不需要改动任何 HTML / CSS / JS。
 *
 *  【 基本规则 】
 *  1. 只改引号 "" 或数字里的内容，不要动其它标点符号和结构。
 *  2. 每条数据之间用英文逗号 , 分隔（最后一条后面不用加）。
 *  3. 加新图集：复制一个 { ... } 整块，粘贴到 albums 数组里
 *     最后一个 } 之前，然后修改里面的内容。
 *  4. 加新字段（例如“拍摄地点”）：直接在对应位置加一行，
 *     例如  location: "上海",  即可，不影响其它功能。
 *
 *  【 图片地址怎么写 】
 *  - 仓库内图片（推荐）：把图片放进 images/ 文件夹，
 *    网址填相对路径，例如 "images/city-frame/01.jpg"。
 *  - 网络图片：直接填完整网址，例如 "https://example.com/a.jpg"。
 * ============================================================ */

window.SITE_DATA = {

    /* ---------- 1. 站点信息 ---------- */
    site: {
        name: "Celestin Photograph",          // 顶部站点名称（Logo）
        copyright: "© 2026 Celestin Photograph · 保留所有权利"   // 底部版权信息
    },

    /* ---------- 2. 分类（集中定义，方便增删） ---------- */
    /* key  是英文编号：不要重复、不要改动（图集靠它关联分类）
       name 是页面显示的中文名 */
    categories: [
        { key: "street",    name: "街头" },
        { key: "humanity",  name: "人文" },
        { key: "landscape", name: "风光" },
        { key: "portrait",  name: "人像" },
        { key: "art",       name: "艺术" }
    ],

    /* ---------- 3. 首页版面（决定首页从上到下展示哪些图集） ---------- */
    /* 首页由几个区块组成，按顺序往下排：
         featured = 大图区（填 1 个图集的 id）
         scroller = 横向滚动区（填一组图集 id，可多可少）
       你可以自由增删区块、调整顺序。 */
    home: {
        sections: [
            { type: "featured", albumId: "time-travel" },
            { type: "scroller", albumIds: ["city-frame", "color-lost", "custom", "portrait-gaze"] },
            { type: "featured", albumId: "grocery-corner" },
            { type: "scroller", albumIds: ["not-shanghai", "street-notes", "mountain-mist", "city-frame"] }
        ]
    },

    /* ---------- 4. 图集列表（所有作品都在这里） ---------- */
    /* 每个图集一个 { ... } 块：
         id           唯一编号（英文/拼音，不要重复，别改动）
         title        图集名称（改这里，全站同步）
         category     所属分类（填上面 categories 里的 key）
         photographer 摄影师
         year         拍摄年份
         description  图集简介（可留空 ""）
         location     拍摄地点（可选字段，示例）
         cover        封面图（可省略：不填就自动用第一张图）
         images       这个图集包含的图片数组
                        url        图片地址
                        caption    这一张图的文字说明（可留空，
                                   会显示在查看器预留的“文字窗口”里） */
    albums: [

        {
            id: "time-travel",
            title: "时空穿越：慢门中的动态",
            category: "art",
            photographer: "Celestin",
            year: "2025",
            description: "以慢门捕捉城市街角里时间的流动，让静止与运动在同一帧中相遇。",
            location: "",
            cover: "images/time-travel/01.jpg",
            images: [
                { url: "images/time-travel/01.jpg", caption: "" },
                { url: "images/time-travel/02.jpg", caption: "" },
                { url: "images/time-travel/03.jpg", caption: "" },
                { url: "images/time-travel/04.jpg", caption: "" },
                { url: "images/time-travel/05.jpg", caption: "" },
                { url: "images/time-travel/06.jpg", caption: "" },
                { url: "images/time-travel/07.jpg", caption: "" },
                { url: "images/time-travel/08.jpg", caption: "" },
                { url: "images/time-travel/09.jpg", caption: "" },
                { url: "images/time-travel/10.jpg", caption: "" }
            ]
        },

        {
            id: "city-frame",
            title: "城市的框架",
            category: "street",
            photographer: "Celestin",
            year: "2025",
            description: "在城市的钢筋骨架之间，寻找被忽略的秩序与几何。",
            location: "上海",
            cover: "images/city-frame/07.jpg",
            images: [
                { url: "images/city-frame/01.jpg", caption: "" },
                { url: "images/city-frame/02.jpg", caption: "" },
                { url: "images/city-frame/03.jpg", caption: "" },
                { url: "images/city-frame/04.jpg", caption: "" },
                { url: "images/city-frame/05.jpg", caption: "" },
                { url: "images/city-frame/06.jpg", caption: "" },
                { url: "images/city-frame/07.jpg", caption: "" },
                { url: "images/city-frame/08.jpg", caption: "" },
                { url: "images/city-frame/09.jpg", caption: "" },
                { url: "images/city-frame/10.jpg", caption: "" },
                { url: "images/city-frame/11.jpg", caption: "" },
                { url: "images/city-frame/12.jpg", caption: "" },
                { url: "images/city-frame/13.jpg", caption: "" },
                { url: "images/city-frame/14.jpg", caption: "" },
                { url: "images/city-frame/15.jpg", caption: "" },
            ]
        },

        {
            id: "color-lost",
            title: "当失去色彩时，我们还剩下什么",
            category: "street",
            photographer: "Celestin",
            year: "2025",
            description: "褪去色彩，街头只剩下光影、轮廓与情绪。",
            location: "",
            images: [
                { url: "images/color-lost/01.jpg", caption: "" },
                { url: "images/color-lost/02.jpg", caption: "逆光里的背影，看不清面庞，却看得到生活。" },
                { url: "images/color-lost/03.jpg", caption: "" }
            ]
        },

        {
            id: "custom",
            title: "自定义",
            category: "landscape",
            photographer: "Celestin",
            year: "2024",
            description: "风光组图示例：山、海与光。",
            location: "",
            images: [
                { url: "images/custom/01.jpg", caption: "" },
                { url: "images/custom/02.jpg", caption: "" },
                { url: "images/custom/03.jpg", caption: "黄昏的浪反复拍打礁石，像某种不肯停歇的约定。" }
            ]
        },

        {
            id: "not-shanghai",
            title: "我不是上海人",
            category: "street",
            photographer: "Celestin",
            year: "2025",
            description: "穿行于石库门与骑楼之间，记录城市过客的瞬间。",
            location: "上海",
            images: [
                { url: "images/not-shanghai/01.jpg", caption: "浴袍与拖鞋，是这个城市最松弛的宣言。" },
                { url: "images/not-shanghai/02.jpg", caption: "" },
                { url: "images/not-shanghai/03.jpg", caption: "" },
                { url: "images/not-shanghai/04.jpg", caption: "" }
            ]
        },

        {
            id: "grocery-corner",
            title: "城西杂货店",
            category: "street",
            photographer: "Celestin",
            year: "2025",
            description: "老城区角落里，一盏灯、一块招牌、一段旧时光。",
            location: "",
            images: [
                { url: "images/grocery-corner/01.jpg", caption: "" },
                { url: "images/grocery-corner/02.jpg", caption: "" },
                { url: "images/grocery-corner/03.jpg", caption: "货架上的旧时光，一层一层码着街坊的日常。" }
            ]
        },

        {
            id: "mountain-mist",
            title: "云深不知处",
            category: "landscape",
            photographer: "Celestin",
            year: "2024",
            description: "山雾缭绕，水墨一般的清晨。",
            location: "黄山",
            images: [
                { url: "images/mountain-mist/01.jpg", caption: "" },
                { url: "images/mountain-mist/02.jpg", caption: "" }
            ]
        },

        {
            id: "portrait-gaze",
            title: "凝视",
            category: "portrait",
            photographer: "Celestin",
            year: "2025",
            description: "人像组图：眼神里的故事。",
            location: "",
            images: [
                { url: "images/portrait-gaze/01.jpg", caption: "" },
                { url: "images/portrait-gaze/02.jpg", caption: "" },
                { url: "images/portrait-gaze/03.jpg", caption: "" }
            ]
        },

        {
            id: "street-notes",
            title: "街头速写",
            category: "humanity",
            photographer: "Celestin",
            year: "2025",
            description: "日常街巷中的人间烟火。",
            location: "",
            images: [
                { url: "images/street-notes/01.jpg", caption: "" },
                { url: "images/street-notes/02.jpg", caption: "" },
                { url: "images/street-notes/03.jpg", caption: "" }
            ]
        }
    ]
};
