import Vue from 'vue';
import VueRouter from 'vue-router';

const Home = resolve => require(['./pages/Home'], resolve);
const Article = resolve => require(['./pages/Article'], resolve);


// 要告诉 vue 使用 vueRouterw
Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home },
    { path: '/article', component: Article }
]

var router = new VueRouter({
    routes
});

export default router;
