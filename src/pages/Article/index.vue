<template>
    <Layout>
        <div :class="$style.content">
            <h2 :class="$style.articleTitle">{{articleDetail.title}}</h2>
            <div :class="$style.articleInfo">
                <div>创建时间：{{articleDetail.createDate}}</div>
                <div>阅读量：{{articleDetail.readNumber}}</div>
                <div>赞：{{articleDetail.like}}</div>
            </div>
            <mavon-editor
                v-model="articleDetail.content"
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

import { articleService } from "@api";
import Comment from "./comment";

export default {
    name: "Article",
    data() {
        return {
            articleDetail: {}
        };
    },
    components: {
        Layout,
        // UserInfoCard,
        RecommendCard,
        // CatalogCard,
        Comment
    },
    watch: {
        "$route.params.id"(newId) {
            this.initData(newId);
        }
    },
    mounted() {
        this.initData();
    },
    methods: {
        async initData(id) {
            id = id || this.$route.params.id || "";
            if (!id) return;

            const res = await articleService.getDetailById({ id });
            if (res.code !== 0) return;
            this.articleDetail = res.data.detail;
        }
    }
};
</script>

<style lang="scss" module>
.content {
    background: #fff;
    .articleTitle {
        padding: 20px 20px 10px;
        font-size: 28px;
        font-weight: 600;
    }

    .articleInfo {
        display: flex;
        padding: 0px 20px 10px;
        & > div {
            color: #969696;
        }
        & > div:not(:last-child) {
            margin-right: 18px;
        }
    }
}
.comment {
    padding: 20px;
    background: #fff;
}
</style>

