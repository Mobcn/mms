import { flatMap } from './array-expand';

/**
 * 生成菜单项ID
 *
 * @param {MenuData[]} menuDataList 菜单数据列表
 * @param {string} preffix 菜单配置数据
 */
function generateMenuID(menuDataList, preffix = '') {
    let index = 0;
    for (const item of menuDataList) {
        item._id = (preffix && preffix + '_') + index++;
        item.subMenu && generateMenuID(item.subMenu, item._id);
    }
}

/**
 * 解析菜单配置
 *
 * @param {MenuData[]} config 菜单配置数据
 * @return {ResolveMenuResult} 菜单配置解析结果
 */
export const resolveMenu = (config) => {
    /**
     * 菜单数据列表
     *
     * @type {MenuData[]}
     */
    const menuDataList = JSON.parse(JSON.stringify(config));
    generateMenuID(menuDataList);

    /** 叶节点菜单数据列表 */
    const leafMenuDataList = flatMap(menuDataList, (item) => item.subMenu || [item], Infinity);

    /**
     * 路由映射集
     *
     * @type {Map<string, [string, string]>}
     */
    const routeMap = new Map(leafMenuDataList.map((item) => [item.path, [item._id, item.component]]));

    /**
     * 通过菜单项ID获取菜单项
     *
     * @param {string} id 菜单项ID
     * @param {MenuData[]} thisArg 菜单数据列表
     */
    const getMenuItem = (id, thisArg = menuDataList) => {
        const indexs = id.split('_').map((e) => Number(e));
        let menuItem = thisArg[indexs[0]];
        for (let i = 1; i < indexs.length; ++i) {
            menuItem = menuItem.subMenu[indexs[i]];
        }
        return menuItem;
    };

    return {
        menuDataList,
        leafMenuDataList,
        routeMap,
        getMenuItem
    };
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

/**
 * 菜单配置解析结果
 *
 * @typedef {Object} ResolveMenuResult
 * @property {MenuData[]} menuDataList 菜单数据列表
 * @property {MenuData[]} leafMenuDataList 叶节点菜单数据列表
 * @property {Map<string, [string, string]>} routeMap 路由映射集
 * @property {(id: string, thisArg?: MenuData[]) => MenuData} getMenuItem 通过菜单项ID获取菜单项
 */
