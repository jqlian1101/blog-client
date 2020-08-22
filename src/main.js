import "@babel/polyfill";
import Es6Promise from "es6-promise";
import Vue from "vue";

import App from "./App.vue";
import router from "./router.js";
import store from "./store";

// 全局样式
import "@styles/icon_font/iconfont.css"; // 引入字体图标
import "@styles/index.scss";

require("./plugins/mavonEditor");

Es6Promise.polyfill();

Vue.config.productionTip = false;

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount("#app");
