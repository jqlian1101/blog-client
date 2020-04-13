<template>
    <Layout>
        <ul :class="$style.noteList">
            <Card :class="$style.listCard" v-for="item in listData" :key="item.id">
                <div @click="onClickList(item)" class="cursor-p">
                    <a :class="$style.title">{{item.title}}</a>
                    <div :class="$style.abstract" class="line-clamp">{{item.summary}}</div>
                </div>
                <div :class="$style.actionList">
                    <span :class="$style.actionBtn">
                        <i>阅读量</i>
                        {{item.readNumber}}
                    </span>
                    <span :class="$style.actionBtn" @click="refreshLike(item.id,item)">
                        <i class="iconfont icon-good cursor-p" />
                        {{item.like}}
                    </span>
                </div>
            </Card>
        </ul>
        <template v-slot:aside>
            <TagsCard />
            <RecommendCard />
        </template>
    </Layout>
</template>

<script>
import Layout from "@components/Layout";
import Card from "@components/Card";

import TagsCard from "@components/Aside/Tags";
import RecommendCard from "@components/Aside/Recommend";
// import CatalogCard from "@components/Aside/Catalog";

import { articleService } from "@api";
import { PAGE_SIZE } from "@common/constants";

export default {
    name: "Home",
    data() {
        return {
            curPage: 1,
            listData: []
        };
    },
    components: {
        Layout,
        Card,
        TagsCard,
        RecommendCard
        // CatalogCard
    },
    mounted() {
        this.getArticleList();
    },
    methods: {
        /**
         * 获取文章列表数据
         */
        async getArticleList() {
            const res = await articleService.getList({
                pageSize: PAGE_SIZE,
                current: this.curPage
            });

            const { current = 1, result = [] } = res.data || {};

            this.curPage = current;
            this.listData = result;
        },

        /**
         * 点击文章列表
         */
        onClickList(item) {
            this.$router.push({ path: `/article/${item.id}` });
        },

        /**
         * 赞
         */
        async refreshLike(id, item) {
            if (!id) return;
            await articleService.refreshLikeNum({ id, type: 1 });
            item.like += 1;
        }
    }
};
</script>

<style lang="scss" module src="./index.scss"/>

