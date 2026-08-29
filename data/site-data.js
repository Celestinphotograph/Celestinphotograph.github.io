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
    /* ---------- 1.5 更多信息页面（关于我 / 联系我） ---------- */
    /* photo = 左侧照片地址；text = 右侧文字（\n 换行） */
    info: {
        about: {
            title: "关于我",
            photo: "images/about/me.jpg",
            text: "郑卓宇\n生卒年不详，浙江嘉兴人。\n自学摄影，自学平面设计，自学网站编写。\n三脚猫功夫，觉得我拍的丑就私信骂我。\n“要玩一辈子摄影”"
        },
        contact: {
            title: "联系我",
            photo: "images/contact/contact.jpg",
            text: "邮箱1：2114034402@qq.com\n邮箱2：kirisame835@gmail.com\n微信：13645838974\n抖音：罐装鱼💤\n"
        }
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
            { type: "scroller", albumIds: ["city-frame", "color-lost", "custom", "band", "purple","zhoushanpeople","family","painting"] },
            { type: "featured", albumId: "grocery-corner" },
            { type: "scroller", albumIds: ["not-shanghai", "dongjidao", "flat", "hongkong","summer-night-fireflies","lost","chaoxianshizhuyi"] }
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
            id: "lost",
            title: "迷失灵魂",
            category: "art",
            photographer: "Celestin",
            year: "2025",
            description: "迷失",
            cover: "images/lost/01.jpg",
            location: "",
            images: [
                { url: "images/lost/01.jpg", caption: "" },
                { url: "images/lost/02.jpg", caption: "" },
                { url: "images/lost/03.jpg", caption: "" },
                { url: "images/lost/04.jpg", caption: "" },
                { url: "images/lost/05.jpg", caption: "" }


            ]
        },
 {
            id: "chaoxianshizhuyi",
            title: "梦境，光影，现实",
            category: "art",
            photographer: "Celestin",
            year: "2025",
            description: "梦境，光影，现实",
            cover: "images/chaoxianshizhuyi/01.jpg",
            location: "",
            images: [
                { url: "images/chaoxianshizhuyi/01.jpg", caption: "" },
                { url: "images/chaoxianshizhuyi/02.jpg", caption: "" },
                { url: "images/chaoxianshizhuyi/03.jpg", caption: "" },
                { url: "images/chaoxianshizhuyi/04.jpg", caption: "" },
                { url: "images/chaoxianshizhuyi/05.jpg", caption: "" },
                { url: "images/chaoxianshizhuyi/06.jpg", caption: "" },
                { url: "images/chaoxianshizhuyi/07.jpg", caption: "" },
                { url: "images/chaoxianshizhuyi/08.jpg", caption: "" },
                { url: "images/chaoxianshizhuyi/09.jpg", caption: "" },
                { url: "images/chaoxianshizhuyi/10.jpg", caption: "" },
                { url: "images/chaoxianshizhuyi/11.jpg", caption: "" },
                { url: "images/chaoxianshizhuyi/12.jpg", caption: "" },
                { url: "images/chaoxianshizhuyi/13.jpg", caption: "" },
                { url: "images/chaoxianshizhuyi/14.jpg", caption: "" }

            ]
        },

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
                { url: "images/time-travel/10.jpg", caption: "" },
                { url: "images/time-travel/11.jpg", caption: "" }
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
            cover: "images/city-frame/10.jpg",
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
                { url: "images/city-frame/16.jpg", caption: "" },
                { url: "images/city-frame/17.jpg", caption: "" },
                { url: "images/city-frame/18.jpg", caption: "" },
                { url: "images/city-frame/19.jpg", caption: "" },
                { url: "images/city-frame/20.jpg", caption: "" }
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
                { url: "images/color-lost/02.jpg", caption: "" },
                { url: "images/color-lost/03.jpg", caption: "" },
                { url: "images/color-lost/04.jpg", caption: "" },
                { url: "images/color-lost/05.jpg", caption: "" },
                { url: "images/color-lost/06.jpg", caption: "" },
                { url: "images/color-lost/07.jpg", caption: "" },
                { url: "images/color-lost/08.jpg", caption: "" },
                { url: "images/color-lost/09.jpg", caption: "" },
                { url: "images/color-lost/10.jpg", caption: "" },
                { url: "images/color-lost/11.jpg", caption: "" },
                { url: "images/color-lost/12.jpg", caption: "" },
                { url: "images/color-lost/13.jpg", caption: "" }
            ]
        },

        {
            id: "custom",
            title: "跨越海山",
            category: "landscape",
            photographer: "Celestin",
            year: "2024",
            description: "风光组图示例：山、海与光。",
            cover: "images/custom/03.jpg",
            location: "",
            images: [
                { url: "images/custom/01.jpg", caption: "" },
                { url: "images/custom/02.jpg", caption: "" },
                { url: "images/custom/03.jpg", caption: "" },
                { url: "images/custom/04.jpg", caption: "" },
                { url: "images/custom/05.jpg", caption: "" },
                { url: "images/custom/06.jpg", caption: "" },
                { url: "images/custom/07.jpg", caption: "" },
                { url: "images/custom/08.jpg", caption: "" }, 
                { url: "images/custom/09.jpg", caption: "" },
                { url: "images/custom/10.jpg", caption: "" },
                { url: "images/custom/11.jpg", caption: "" },
                { url: "images/custom/12.jpg", caption: "" },
                { url: "images/custom/13.jpg", caption: "" },
                { url: "images/custom/14.jpg", caption: "" },
                { url: "images/custom/15.jpg", caption: "" },
                { url: "images/custom/16.jpg", caption: "" }
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
                { url: "images/not-shanghai/01.jpg", caption: "" },
                { url: "images/not-shanghai/02.jpg", caption: "" },
                { url: "images/not-shanghai/03.jpg", caption: "" },
                { url: "images/not-shanghai/04.jpg", caption: "" },
                { url: "images/not-shanghai/05.jpg", caption: "" },
                { url: "images/not-shanghai/06.jpg", caption: "" },
                { url: "images/not-shanghai/07.jpg", caption: "" },
                { url: "images/not-shanghai/08.jpg", caption: "" },
                { url: "images/not-shanghai/09.jpg", caption: "" },
                { url: "images/not-shanghai/10.jpg", caption: "" },
                { url: "images/not-shanghai/11.jpg", caption: "" },
                { url: "images/not-shanghai/12.jpg", caption: "" }
            ]
        },

        {
            id: "grocery-corner",
            title: "城西回忆录",
            category: "humanity",
            photographer: "Celestin",
            year: "2025",
            description: "老城区角落里，一盏灯、一块招牌、一段旧时光。",
            location: "",
            images: [
                { url: "images/grocery-corner/01.jpg", caption: "" },
                { url: "images/grocery-corner/02.jpg", caption: "" },
                { url: "images/grocery-corner/03.jpg", caption: "" },
                { url: "images/grocery-corner/04.jpg", caption: "" },
                { url: "images/grocery-corner/05.jpg", caption: "" },
                { url: "images/grocery-corner/06.jpg", caption: "" },
                { url: "images/grocery-corner/07.jpg", caption: "" },
                { url: "images/grocery-corner/08.jpg", caption: "" },
                { url: "images/grocery-corner/09.jpg", caption: "" },
                { url: "images/grocery-corner/10.jpg", caption: "" },
                { url: "images/grocery-corner/11.jpg", caption: "" },
                { url: "images/grocery-corner/12.jpg", caption: "" },
                { url: "images/grocery-corner/13.jpg", caption: "" },
                { url: "images/grocery-corner/14.jpg", caption: "" },
                { url: "images/grocery-corner/15.jpg", caption: "" },
                { url: "images/grocery-corner/16.jpg", caption: "" }
            ]
        },

     
        {
            id: "flat",
            title: "平面构成",
            category: "art",
            photographer: "Celestin",
            year: "2025",
            description: "几何、色彩与光影的平面实验。",
            cover: "images/flat/01.jpg",
            location: "",
            images: [
                { url: "images/flat/01.jpg", caption: "" },
                { url: "images/flat/02.jpg", caption: "" },
                { url: "images/flat/03.jpg", caption: "" },
                { url: "images/flat/04.jpg", caption: "" },
                { url: "images/flat/05.jpg", caption: "" },
                { url: "images/flat/06.jpg", caption: "" },
                { url: "images/flat/07.jpg", caption: "" },
                { url: "images/flat/08.jpg", caption: "" },
                { url: "images/flat/09.jpg", caption: "" },
                { url: "images/flat/10.jpg", caption: "" },
                { url: "images/flat/11.jpg", caption: "" },
                { url: "images/flat/12.jpg", caption: "" },
                { url: "images/flat/13.jpg", caption: "" },
                { url: "images/flat/14.jpg", caption: "" }
            ]
        },
{
            id: "purple",
            title: "紫",
            category: "art",
            photographer: "Celestin",
            year: "2025",
            description: "紫色日暮",
            cover: "images/purple/01.jpg",
            location: "",
            images: [
                { url: "images/purple/01.jpg", caption: "" },
                { url: "images/purple/02.jpg", caption: "" },
                { url: "images/purple/03.jpg", caption: "" },
                { url: "images/purple/04.jpg", caption: "" },
                { url: "images/purple/05.jpg", caption: "" },
                { url: "images/purple/06.jpg", caption: "" },
                { url: "images/purple/07.jpg", caption: "" },
                { url: "images/purple/08.jpg", caption: "" },
                { url: "images/purple/09.jpg", caption: "" },
                { url: "images/purple/10.jpg", caption: "" }


            ]
        },

        {
            id: "summer-night-fireflies",
            title: "夏夜和萤火虫",
            category: "art",
            photographer: "Celestin",
            year: "2024",
            description: "山雾缭绕，水墨一般的清晨。",
            location: "",
            images: [
                { url: "images/summer-night-fireflies/01.jpg", caption: "" },
                { url: "images/summer-night-fireflies/02.jpg", caption: "" },
                { url: "images/summer-night-fireflies/03.jpg", caption: "" },
                { url: "images/summer-night-fireflies/04.jpg", caption: "" },
                { url: "images/summer-night-fireflies/05.jpg", caption: "" },
                { url: "images/summer-night-fireflies/06.jpg", caption: "" },
                { url: "images/summer-night-fireflies/07.jpg", caption: "" },
                { url: "images/summer-night-fireflies/08.jpg", caption: "C/2023 A3 (Tsuchinshan-ATLAS)" },
                { url: "images/summer-night-fireflies/09.jpg", caption: "" },
                { url: "images/summer-night-fireflies/10.jpg", caption: "" }
            ]
        },

        {
            id: "band",
            title: "“这是我听过最好听的中文歌”",
            category: "portrait",
            photographer: "Celestin",
            year: "2025",
            description: "要组一辈子乐队啊。",
            cover: "images/band/04.jpg",
            location: "",
            images: [
                { url: "images/band/01.jpg", caption: "" },
                { url: "images/band/02.jpg", caption: "" },
                { url: "images/band/03.jpg", caption: "" },
                { url: "images/band/04.jpg", caption: "" },
                { url: "images/band/05.jpg", caption: "" },
                { url: "images/band/06.jpg", caption: "" },
                { url: "images/band/07.jpg", caption: "" },
                { url: "images/band/08.jpg", caption: "" },
                { url: "images/band/09.jpg", caption: "" },
                { url: "images/band/10.jpg", caption: "" }
            ]
        },

        {
            id: "dongjidao",
            title: "你好，东极",
            category: "landscape",
            photographer: "Celestin",
            year: "2025",
            description: "",
            location: "",
            cover: "images/dongjidao/11.jpg",
            images: [
                { url: "images/dongjidao/01.jpg", caption: "" },
                { url: "images/dongjidao/02.jpg", caption: "" },
                { url: "images/dongjidao/03.jpg", caption: "" },
                { url: "images/dongjidao/04.jpg", caption: "" },
                { url: "images/dongjidao/05.jpg", caption: "" },
                { url: "images/dongjidao/06.jpg", caption: "" },
                { url: "images/dongjidao/07.jpg", caption: "" },
                { url: "images/dongjidao/08.jpg", caption: "" },
                { url: "images/dongjidao/09.jpg", caption: "" },
                { url: "images/dongjidao/10.jpg", caption: "" },
                { url: "images/dongjidao/11.jpg", caption: "" },
                { url: "images/dongjidao/12.jpg", caption: "" },
                { url: "images/dongjidao/13.jpg", caption: "" },
                { url: "images/dongjidao/14.jpg", caption: "" },
                { url: "images/dongjidao/15.jpg", caption: "" },
                { url: "images/dongjidao/16.jpg", caption: "" },
                { url: "images/dongjidao/17.jpg", caption: "" },
                { url: "images/dongjidao/18.jpg", caption: "" }
            ]
        },
       
 
       

        {
            id: "zhoushanpeople",
            title: "海边的人们",
            category: "humanity",
            photographer: "Celestin",
            year: "2025",
            description: "舟山群岛的海边人们，生活在海风与浪花之间。",
            cover: "images/zhoushanpeople/01.jpg",
            location: "",
            images: [
                { url: "images/zhoushanpeople/01.jpg", caption: "" },
                { url: "images/zhoushanpeople/02.jpg", caption: "" },
                { url: "images/zhoushanpeople/03.jpg", caption: "" },
                { url: "images/zhoushanpeople/04.jpg", caption: "" },
                { url: "images/zhoushanpeople/05.jpg", caption: "" },
                { url: "images/zhoushanpeople/06.jpg", caption: "" },
                { url: "images/zhoushanpeople/07.jpg", caption: "" },
                { url: "images/zhoushanpeople/08.jpg", caption: "" },
                { url: "images/zhoushanpeople/09.jpg", caption: "" },
                { url: "images/zhoushanpeople/10.jpg", caption: "" },
                { url: "images/zhoushanpeople/11.jpg", caption: "" },
                { url: "images/zhoushanpeople/12.jpg", caption: "" },
                { url: "images/zhoushanpeople/13.jpg", caption: "" },
                { url: "images/zhoushanpeople/14.jpg", caption: "" },
                { url: "images/zhoushanpeople/15.jpg", caption: "" },
                { url: "images/zhoushanpeople/16.jpg", caption: "" },
                { url: "images/zhoushanpeople/17.jpg", caption: "" },
                { url: "images/zhoushanpeople/18.jpg", caption: "" }                    

            ]
        },
 {
            id: "family",
            title: "家人",
            category: "portrait",
            photographer: "Celestin",
            year: "2025",
            description: "我们是一家人",
            cover: "images/family/05.jpg",
            location: "",
            images: [
                { url: "images/family/01.jpg", caption: "" },
                { url: "images/family/02.jpg", caption: "" },
                { url: "images/family/03.jpg", caption: "" },
                { url: "images/family/04.jpg", caption: "" },
                { url: "images/family/05.jpg", caption: "" },
                { url: "images/family/06.jpg", caption: "" },
                { url: "images/family/07.jpg", caption: "" }
            ]
        },
 {
            id: "hongkong",
            title: "迷失在香港的雨夜",
            category: "street",
            photographer: "Celestin",
            year: "2025",
            description: "迷失香港",
            cover: "images/hongkong/03.jpg",
            location: "",
            images: [
                { url: "images/hongkong/01.jpg", caption: "" },
                { url: "images/hongkong/02.jpg", caption: "" },
                { url: "images/hongkong/03.jpg", caption: "" },
                { url: "images/hongkong/04.jpg", caption: "" },
                { url: "images/hongkong/05.jpg", caption: "" },
                { url: "images/hongkong/06.jpg", caption: "" },
                { url: "images/hongkong/07.jpg", caption: "" },
                { url: "images/hongkong/08.jpg", caption: "" },
                { url: "images/hongkong/09.jpg", caption: "" },
                { url: "images/hongkong/10.jpg", caption: "" },
                { url: "images/hongkong/11.jpg", caption: "" },
                { url: "images/hongkong/12.jpg", caption: "" },
                { url: "images/hongkong/13.jpg", caption: "" },
                { url: "images/hongkong/14.jpg", caption: "" },
                { url: "images/hongkong/15.jpg", caption: "" },
                { url: "images/hongkong/16.jpg", caption: "" },
                { url: "images/hongkong/17.jpg", caption: "" },
                { url: "images/hongkong/18.jpg", caption: "" },
                { url: "images/hongkong/19.jpg", caption: "" },
                { url: "images/hongkong/20.jpg", caption: "" },
                { url: "images/hongkong/21.jpg", caption: "" },
                { url: "images/hongkong/22.jpg", caption: "" },
                { url: "images/hongkong/23.jpg", caption: "" },
                { url: "images/hongkong/24.jpg", caption: "" }
            ]
        },       
 {
            id: "painting",
            title: "相机也是一种画笔",
            category: "art",
            photographer: "Celestin",
            year: "2025",
            description: "画意摄影",
            cover: "images/painting/01.jpg",
            location: "",
            images: [
                { url: "images/painting/01.jpg", caption: "" },
                { url: "images/painting/02.jpg", caption: "" },
                { url: "images/painting/03.jpg", caption: "" },
                { url: "images/painting/04.jpg", caption: "" },
                { url: "images/painting/05.jpg", caption: "" }
            ]
        },

        {
            id: "easter-egg",
            title: "彩蛋",
            category: "art",
            photographer: "Celestin",
            year: "2025",
            description: "彩蛋图集，存放一些特别的照片。",
            location: "",
            images: [
                { url: "images/easter/01.jpg", caption: "" },
                { url: "images/easter/02.jpg", caption: "" },
                { url: "images/easter/03.jpg", caption: "" },
                { url: "images/easter/04.jpg", caption: "" },
                { url: "images/easter/05.jpg", caption: "" },
                { url: "images/easter/06.jpg", caption: "" },
                { url: "images/easter/07.jpg", caption: "" },
                { url: "images/easter/08.jpg", caption: "" },
                { url: "images/easter/09.jpg", caption: "" },
                { url: "images/easter/10.jpg", caption: "" },
                { url: "images/easter/11.jpg", caption: "" },
                { url: "images/easter/12.jpg", caption: "" },
                { url: "images/easter/13.jpg", caption: "" }
            ]
        },
    ]
};
