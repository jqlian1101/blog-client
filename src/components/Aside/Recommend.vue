<template>
    <Card class="aside-card">
        <!--
            1、没有登录，推荐最新
            2、已登录，推荐赞过或收藏过的标签，最新文章
        -->
        <div class="card-title">推荐阅读</div>
        <div class="card-cont">
            <div
                :class="$style.listItem"
                class="cursor-p"
                v-for="item in listData"
                :key="item.id"
                @click="$router.push({ path: `/article/${item.id}`})"
            >
                <div title="第十五天" :class="$style.title" class="line-clamp">
                    <a rel="noopener noreferrer">{{item.title}}</a>
                </div>
                <div :class="$style.meta">{{item.createDate}}</div>
            </div>
        </div>
    </Card>
</template>

<script>
import Card from "@components/Card";
import { articleService } from "@api";

export default {
    name: "UserInfoCard",
    data() {
        return {
            listData: []
        };
    },
    components: {
        Card
    },
    mounted() {
        this.getList();
    },
    methods: {
        async getList() {
            const res = await articleService.getRecommendations();
            const { result = [] } = res.data || {};

            this.listData = result;
        }
    }
};
</script>

<style lang="scss" module>
.listItem {
    margin-bottom: 12px;
}

.title {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 4px;
    // overflow: hidden;
    // text-overflow: ellipsis;
    // display: -webkit-box;
    // -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.meta {
    font-size: 12px;
    color: #969696;
}
</style>

