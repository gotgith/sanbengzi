const path = require('path')
module.exports = {
    base:'/sanbengzi/',
    title: 'sky-wheel UI 框架',
    description: '实用的 UI 框架 ',
    themeConfig: {
        nav: [
            {text: '主页', link: '/'},
            {text: 'Welcome to Star', link: 'https://github.com/gotgith/sanbengzi'},
            {text: 'GitHub', link: 'https://github.com/gotgith'},
        ],
        sidebar: [
            {
                title: '入门',
                collapsable: false,
                children: [
                    '/install/',
                    '/get-started/',
                ]
            },
            {
                title: '组件',
                collapsable: false,
                children: [
                    '/components/button',
                    '/components/input',
                    '/components/grid',
                    '/components/layout',
                    '/components/toast',
                    '/components/popover',
                    '/components/tabs',
                    '/components/collapse'

                ]
            },

        ]
    },
    scss:{
        includePaths: [path.join(__dirname, '../../styles')]
    }
}