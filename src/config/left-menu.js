/**
 * 侧边栏配置
 *
 * @type {MenuData[]}
 */
export const leftMenuConfig = [
    {
        title: '首页',
        icon: 'Home',
        path: '/',
        component: '/src/components/404/_404.jsx'
    },
    {
        title: '发布文章',
        icon: 'Send',
        path: '/publish',
        component: '/src/components/404/_4042.jsx'
    },
    {
        title: '内容管理',
        icon: 'Stairs',
        subMenu: [
            {
                title: '文章管理',
                icon: 'ArticleOutlined',
                path: '/management/article',
                component: '/src/components/404/_4042.jsx'
            },
            {
                title: '分类管理',
                icon: 'Category',
                path: '/management/category',
                component: '/src/components/404/_4042.jsx'
            },
            {
                title: '标签管理',
                icon: 'SellOutlined',
                path: '/management/tag',
                component: '/src/components/404/_4042.jsx'
            }
        ],
        sx: { pl: 4 }
    },
    {
        title: '系统设置',
        icon: 'Settings',
        subMenu: [
            {
                title: '常规设置',
                icon: 'TuneOutlined',
                path: '/setting/general',
                component: '/src/components/404/_4042.jsx'
            },
            {
                title: '上传设置',
                icon: 'Upload',
                path: '/setting/upload',
                component: '/src/components/404/_4042.jsx'
            }
        ],
        sx: { pl: 4 }
    }
];

/**
 * 路由映射
 *
 * @type {Map<string, string>}
 */
export const routeMap = (() => {
    const res = new Map();
    const tmpArray = [...leftMenuConfig];
    for (let item of tmpArray) {
        if (item.subMenu) {
            tmpArray.push(...item.subMenu);
        } else {
            res.set(item.path, item.component);
        }
    }
    return res;
})();

/**
 * 菜单数据
 *
 * @typedef {Object} MenuData
 * @property {string} title 菜单项标题
 * @property {string | undefined} icon 菜单项图标
 * @property {string} path 菜单项路由
 * @property {string} component 菜单项组件
 * @property {MenuData[] | undefined} subMenu 子菜单项
 * @property {import("@mui/system").SxProps<Theme> | undefined} sx 子菜单项样式参数
 */
