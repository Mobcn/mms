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
        component: '/src/modules/Home/Home.jsx'
    },
    {
        title: '内容管理',
        icon: 'Stairs',
        subMenu: [
            {
                title: '分类管理',
                icon: 'Category',
                path: '/management/category',
                component: '/src/modules/Management/Category/Category.jsx'
            },
            {
                title: '标签管理',
                icon: 'SellOutlined',
                path: '/management/tag',
                component: '/src/modules/Management/Tag/Tag.jsx'
            }
        ],
        sx: { pl: 4 }
    }
];

// 生成ID
(function arrange(arr, preffix) {
    let index = 0;
    for (const item of arr) {
        item._id = (preffix && preffix + '_') + index++;
        item.subMenu && arrange(item.subMenu, item._id);
    }
})(leftMenuConfig, '');

/**
 * 路由映射
 *
 * @type {Map<string, [string, string]>}
 */
export const routeMap = (() => {
    const res = new Map();
    (function ergodic(arr) {
        for (const item of arr) {
            item.subMenu ? ergodic(item.subMenu) : res.set(item.path, [item._id, item.component]);
        }
    })(leftMenuConfig);
    return res;
})();

/**
 * 通过菜单项ID获取菜单项
 *
 * @param {string} id 菜单项ID
 * @param {MenuData[] | undefined} thisArg 菜单配置对象
 */
export const getMenuItem = (id, thisArg) => {
    const indexs = id.split('_').map((e) => Number(e));
    let menuItem = (thisArg || leftMenuConfig)[indexs[0]];
    for (let i = 1; i < indexs.length; ++i) {
        menuItem = menuItem.subMenu[indexs[i]];
    }
    return menuItem;
};

/**
 * 菜单数据
 *
 * @typedef {Object} MenuData
 * @property {string} _id 菜单项ID
 * @property {string} title 菜单项标题
 * @property {string | undefined} icon 菜单项图标
 * @property {string} path 菜单项路由
 * @property {string} component 菜单项组件
 * @property {MenuData[] | undefined} subMenu 子菜单项
 * @property {import("@mui/system").SxProps<Theme> | undefined} sx 子菜单项样式参数
 */
