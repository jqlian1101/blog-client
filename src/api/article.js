/**
 * @description article相关api请求
 */

import request from "./utils/request";

/**
 * 获取文章详情
 * @param {Object}  { id }
 */
export const getArticleDetail = params =>
    request("/article/detail", { ...params });

export default {
    getArticleDetail
};
