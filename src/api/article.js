/**
 * @description article相关api请求
 */

import request from "./utils/request";

/**
 * 获取文章列表
 */
export const getList = params => request("/article/list", { ...params });

/**
 * 获取推荐文章列表
 */
export const getRecommendations = params =>
    request("/article/recommendations", { ...params });

/**
 * 获取文章详情
 * @param {id}
 */
export const getDetailById = params =>
    request("/article/detail", { ...params });
