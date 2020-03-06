/* eslint-disable prefer-const */

// import { MODEL_SAVE_TREE_DATA, MODEL_SET_CUR_MODEL_ID, MODEL_SET_CUR_MODEL_NODE, CLEAR_ALL_DATA_MODELS } from 'store/mutation-types.js';
// import { MODEL_TREE_TYPE } from 'common/constants';

// import { handleTreeData } from 'utils/util';

// import { model } from "api";

// state
const state = {
    modelsData: {},     // 每个元件的数据{ id: data }
    modelTreeCache: [],     // modelTree原始数据缓存
    modelsTree: [],      // 模型树数据
    curModelId: '',       // 当前选中模型树的id
    curTreeNodeId: ""      // 当前选中的tree节点id
}

// getters
const getters = {


}

// actions
const actions = {

}

// mutations
const mutations = {

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
