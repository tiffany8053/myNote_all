module.exports = {
    title: '測試',
    base: '/myNote/',
    // dest: 'dist', // 若設置此項目,dist文件會和docs目錄同一層
    description: '測試vuepress',
    port: '8002', //自定義本機入口
    markdown: {
        lineNumbers: true, // 顯示行號
        extractHeaders: [ 'h2', 'h3' ], // 修改搜索條件
    },
    head: [
        ['link', {rel:'icon', href:"/favicon.ico"}], // 路徑是固定的
    ],
    // tags: ["VuePress"],
    themeConfig: {
        // tags: '/tags',
        repo: 'tiffany8053/myNote_all',
        editLinks: true,
        docsDir: 'docs',
        docsBranch: 'master',
        editLinkText: '查看原始碼',
        mdEnhance: {
            flowchart: true,
        },
        lastUpdated: 'Last Updated',
        // 網頁左上角logo設定
        logo:'/common/Aquarius.png',

        // 設定內置搜索
        search: true, // false就會不顯示,不設定的話默認為true

        // 頁面滾動效果
        smoothScroll: true,

        // 對內置的搜索進行最多結果數量的限制
        searchMaxSuggestions: 3, 

        //讓上 / 下一篇鏈接是否顯示
        prevLinks: true,
        nextLinks: true,
        
        //會自動顯示sidebar 每個目錄的標題連接
        displayAllHeaders: true,

        // 配置永久連接
        permalink: '/:year/:month/:day/:slug',

        // nav是設定右上的導覽列
        nav: [
            { text: '首頁', link: '/', rel: 'home'},
            { text: '教學', link: '/myNote/components/', rel: 'methods', target:'_blank'}, 
            // _blank是開新視窗
            // 注意： 因為是另開新視窗,連結路徑會少/myNote/,所以在自身專案有設定另開新視窗的頁面,都要另加base的value值
            { text: '練習', items: [ // 導覽列下拉選項
                {text: '練習一', link: '/components/practice/practiceOne/'},
                {text: '練習二', link: '/components/practice/practiceTwo/'},
                {text: '練習三', link: '/components/practice/practiceThree/'},
            ]},
            { text: '部署github page', link: '/components/gitHub_page/',},
            { text: 'Vuepress官網', link: 'https://vuepress.vuejs.org/zh/', rel: 'vuepress'},
        ],

        // sidebar 是設定左側的菜單
        sidebar: [
            {
                title: '教學',
                collapsable: false,
                path: '/components/',
                children: [
                    { 
                        title: '指令手冊',
                        path: '/components/methods/',
                        children: [ 
                            {title: 'config設定', path: '/components/methods/configSetting' },
                            {title: 'way02', path: '/components/methods/way02' },
                        ]
                    },
                    { title: '插件', path: '/components/plugin/',},
                    { title: '使用vue組件教學', path: '/components/teachComponent/',},
                    { title: 'vue組件呈現', path: '/components/teachComponent/testComponents',},
                    { title: '圖表', path: '/components/graph/',},
                ],
            },
            {
                title: '練習',
                collapsable: true,
                path: '/components/practice/',
                children: [
                    { title: '練習一', path: '/components/practice/practiceOne/'},
                    { title: '練習二', path: 'components/practice/practiceTwo/' },
                    { title: '練習三', path: 'components/practice/practiceThree/' },
                ],
            },
        ],
        lastUpdated: '最後更新', // 時間會以git commit時間為主(所以尚未git的話 就不會出現)
    },
    // config.js
    plugins: [
        'vuepress-plugin-mermaidjs',
        'flowchart',
        '@vuepress/active-header-links',
            {
            sidebarLinkSelector: '.sidebar-link',
            headerAnchorSelector: '.header-anchor'
            },
        '@vuepress/back-to-top',
        '@vuepress/last-updated',{
            transformer: (timestamp, lang) => {
                // 不要忘了安装 moment
                // moment 时间格式化文档戳这里 http://momentjs.cn/
                const moment = require('moment')
                moment.locale(lang)
                return moment(timestamp).fromNow()
            }
        }
    ],
}