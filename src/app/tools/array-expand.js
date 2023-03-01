/**
 * 展开数组
 *
 * @template T
 * @param {T[]} src 源数组
 * @param {T[]} des 展开数组
 * @param {function(T): T[] | [T]} unfoldFun 数组展开映射函数
 * @param {number | undefined} depth 深度
 */
function unfold(src, des, unfoldFun, depth) {
    if (depth <= 0) {
        des.push(...src);
        return;
    }
    for (const item of src) {
        const res = unfoldFun(item);
        if (res.length > 1) {
            unfold(res, des, unfoldFun, depth - 1);
        } else {
            des.push(res[0]);
        }
    }
}

/**
 * 平铺数组
 *
 * @template T
 * @param {T[]} thisArg 目标数组
 * @param {function(T): T[] | [T]} unfoldFun 数组展开映射函数
 * @param {number | undefined} depth 深度
 * @returns {Array<T>} 平铺数组
 */
export const flatMap = (thisArg, unfoldFun, depth = 1) => {
    const flatArray = [];
    unfold(thisArg, flatArray, unfoldFun, depth);
    return flatArray;
};
