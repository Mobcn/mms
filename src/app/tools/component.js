/**
 * 动态组件集
 *
 * @type {{[path: string]: () => Promise<{default: JSX.Element}>}}
 */
const components = import.meta.glob('/src/**/*.jsx');

/**
 * 加载动态组件
 *
 * @param {string} path 组件路径
 * @param {(component: JSX.Element) => void} callback 回调函数
 */
export const loadAsyncComponent = (path, callback) => {
    if (!components[path]) {
        throw new Error(`组件不存在: ${path}`);
    }
    components[path]().then(({ default: asyncComponent }) => callback(asyncComponent));
};
