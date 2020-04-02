import Vue from "vue";
import VueRouter from "vue-router";

const Home = resolve => require(["./pages/Home"], resolve);
const Article = resolve => require(["./pages/Article"], resolve);
const Tags = resolve => require(["./pages/Tags"], resolve);

// 要告诉 vue 使用 vueRouterw
Vue.use(VueRouter);

const routes = [
    { path: "/", component: Home },
    { path: "/article/:id", component: Article },
    { path: "/tags/:id", component: Tags },
    { path: "*", redirect: "/" }
];

var router = new VueRouter({
    routes
});

export default router;
