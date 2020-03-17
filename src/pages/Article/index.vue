<template>
    <Layout>
        <div :class="$style.content">
            <mavon-editor
                v-model="articleContnet"
                :editable="false"
                defaultOpen="preview"
                :subfield="false"
                :boxShadow="false"
                :toolbarsFlag="false"
            />
        </div>
        <div :class="$style.comment">
            <Comment />
        </div>
        <template v-slot:aside>
            <!-- <UserInfoCard /> -->
            <RecommendCard />
            <!-- <CatalogCard /> -->
        </template>
    </Layout>
</template>

<script>
import Layout from "@components/Layout";

// import UserInfoCard from "@components/Aside/UserInfo";
import RecommendCard from "@components/Aside/Recommend";
// import CatalogCard from "@components/Aside/Catalog";

import articleService from "@api/article.js";
import Comment from "./comment";

export default {
    name: "Article",
    data() {
        return {
            articleContnet: "# test"
        };
    },
    components: {
        Layout,
        // UserInfoCard,
        RecommendCard,
        // CatalogCard,
        Comment
    },
    mounted() {
        this.initData();
    },
    methods: {
        async initData() {
            const res = await articleService.getArticleDetail({ id: 2 });
            if (res.code !== 0) return;
            this.articleContnet = res.data.detail.content;
        }
    }
};
</script>

<style lang="scss" module>
.content {
    background: #fff;
    // padding: 20px;
}
.comment {
    padding: 20px;
    background: #fff;
}
</style>

