/**
 * 侧边栏配置
 *
 * @type {import("../app/tools/left-menu").MenuData[]}
 */
export default [
    {
        title: '首页',
        icon: 'Home',
        path: '/',
        component: '/src/pages/Home/Home.jsx'
    },
    {
        title: '内容管理',
        icon: 'Stairs',
        subMenu: [
            {
                title: '分类管理',
                icon: 'Category',
                path: '/management/category',
                component: '/src/pages/Management/Category/Category.jsx'
            },
            {
                title: '标签管理',
                icon: 'SellOutlined',
                path: '/management/tag',
                component: '/src/pages/Management/Tag/Tag.jsx'
            }
        ],
        sx: { pl: 4 }
    }
];
