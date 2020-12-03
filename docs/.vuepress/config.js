module.exports = {
    title: '吕丁涛的博客',
    description: 'Just playing around',
    themeConfig: {
        logo: '/assets/img/logo.png',
        nav: [
            { text: '首页', link: '/' },
            { text: 'Guide', link: '/guide/' },
        ],
        sidebar: [
        ],
        displayAllHeaders: true, // 默认值：false
        algolia: {
            apiKey: '<API_KEY>',
            indexName: '<INDEX_NAME>'
        },
        lastUpdated: 'Last Updated', // string | boolean
        // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
        nextLinks: false,
        // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
        prevLinks: false,
        //页面滚动
        smoothScroll: true
    }
}