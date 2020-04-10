/**
 * @description article相关api请求
 */

import request from "./utils/request";

/**
 * 获取文章列表
 */
export const getList = params => request("/article/list", { ...params, isSign: '0' });

/**
 * 获取推荐文章列表
 */
export const getRecommendations = params =>
    request("/article/recommendations", { ...params, isSign: '0' });

/**
 * 获取文章详情
 * @param {id}
 */
export const getDetailById = params =>
    request("/article/detail", { ...params });

/**
 * 评论
 * @param { topicId, content }
 */
export const comment = params => request("/article/comment", { ...params });

/**
 * 获取文章评论列表
 * @param { id: articleId }
 */
export const getCommentsByArticleId = params => {
    const { id } = params || {};
    return request(`/article/${id}/comments`);
};


/**
 * 获取文章评论的回复
 * @param { id: commentId }
 */
export const getReplyList = params => {
    const { id } = params || {};
    return request(`/article/${id}/replies`);
}

/**
 * 回复评论
 */
export const sendReply = params => {
    const { commentId } = params || {};
    return request(`/article/${commentId}/reply`, { ...params });
}
