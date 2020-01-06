import Vue from 'vue';
import VueRouter from 'vue-router';

const App = resolve => require(['pages'], resolve);

// const Viewer = resolve => require(['pages/Viewer'], resolve);



// 要告诉 vue 使用 vueRouterw
Vue.use(VueRouter);

const routes = [
    { path: '/', component: App }
]

var router = new VueRouter({
    routes
});

export default router;
