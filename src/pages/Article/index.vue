<template>
    <Layout>
        <div :class="$style.content">
            <h2 :class="$style.articleTitle">{{articleDetail.title}}</h2>
            <div :class="$style.articleInfo">
                <div>创建时间：{{articleDetail.createDate}}</div>
                <div>阅读量：{{articleDetail.readNumber + 1}}</div>
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
        <div :class="$style.comment" v-if="isHaveArticle">
            <Comment :articleInfo="articleDetail" @refreshComment="refreshComment" />
        </div>
        <div :class="$style.commentListWrap">
            <div :class="$style.main">
                <ul v-if="isHaveComment">
                    <li :class="$style.list" v-for="item in commentList" :key="item.id">
                        <CommentItem :dataSource="item" />
                    </li>
                </ul>
                <div v-else :class="$style.noComment">暂无评论</div>
            </div>
        </div>
        <template v-slot:aside>
            <!-- <UserInfoCard /> -->
            <RecommendCard />
            <!-- <CatalogCard /> -->
        </template>
        <div :class="$style.like" class="cursor-p" @click="refreshLikeNum">
            <i class="iconfont icon-good cursor-p" v-if="!isLike" />
            <i class="iconfont icon-good-fill cursor-p" v-else />
        </div>
        <div :class="$style.unLike" class="cursor-p" @click="unLike">
            <i class="iconfont icon-bad cursor-p" />
        </div>
    </Layout>
</template>

<script>
import Layout from "@components/Layout";

// import UserInfoCard from "@components/Aside/UserInfo";
import RecommendCard from "@components/Aside/Recommend";
// import CatalogCard from "@components/Aside/Catalog";

import { articleService } from "@api";
import Comment from "./comment/Input";
// import ReplyBox from "./replyBox";
import CommentItem from "./comment";

export default {
    name: "Article",
    data() {
        return {
            articleDetail: {},
            commentList: [],
            isLike: false
        };
    },
    components: {
        Layout,
        // UserInfoCard,
        RecommendCard,
        // CatalogCard,
        Comment,
        // ReplyBox,
        CommentItem
    },
    computed: {
        isHaveArticle() {
            return !!this.articleDetail.content;
        },
        isHaveComment() {
            return this.commentList.length > 0;
        },
        articleId() {
            return this.$route.params.id || "";
        }
    },
    watch: {
        "$route.params.id"(newId) {
            this.initData(newId);
            this.getCommentList(newId);
        }
    },
    mounted() {
        this.initData();
        this.getCommentList();
    },
    methods: {
        /**
         * 获取详情
         */
        async initData(id) {
            id = id || this.articleId;
            if (!id) return;

            this.refreshReadNum(id);

            const res = await articleService.getDetailById({ id });
            if (res.code !== 0) return;
            this.articleDetail = res.data.detail;
        },

        /**
         * 获取评论列表
         */
        async getCommentList(id) {
            id = id || this.$route.params.id || "";
            if (!id) return;

            const res = await articleService.getCommentsByArticleId({ id });
            const { result } = res.data;
            this.commentList = result || [];
        },

        /**
         * 刷新评论列表
         */
        refreshComment() {
            this.getCommentList();
        },

        /**
         * 更新阅读量
         */
        refreshReadNum(id) {
            if (id === this.prev_refreshReadNum_id) return;
            this.prev_refreshReadNum_id = id;
            articleService.refreshReadNum(id);
        },

        /**
         * 更新赞的数量
         */
        async refreshLikeNum() {
            if (!this.articleId) return;
            await articleService.refreshLikeNum({
                id: this.articleId,
                type: 1
            });
            this.articleDetail.like += 1;
            this.isLike = true;
        },

        unLike() {
            const commentDom = document.querySelector("#comment");
            if (!commentDom) return;

            commentDom.scrollIntoView(false);
            const inp = commentDom.querySelector(".commentInput");
            inp && inp.focus();
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

.commentListWrap {
    padding: 0 20px;
    background: #fff;

    .main {
        border-top: 1px solid #f2f6fc;
    }

    .noComment {
        text-align: center;
        line-height: 100px;
        font-size: 14px;
        color: #999;
    }

    .list {
        padding: 20px 0;
    }
}

.like,
.unLike {
    width: 38px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    position: fixed;
    top: 40%;
    left: 50%;
    margin-left: -590px;
    border-radius: 50%;
    background-color: #fff;
    i {
        font-size: 24px;
        color: #969696;
    }
}

.unLike {
    top: calc(40% + 50px);
}
</style>

