<template>
    <Layout>
        <ul :class="$style.noteList">
            <Card :class="$style.listCard">
                <a :class="$style.title" target="_blank" href="/">浅谈朋友圈</a>
                <div :class="$style.abstract">
                    # 入口文件解析
                    > 1. 本文基于v2.5.1版本
                    > 1. 开启源码调试：将`build/config.js`文件中的`genConfig`函数内的`config.sourceMap`改为`true`
                    `package.json`文件中，通过script的dev命令，可以找到，源码构建命令入口文件：build/config.js，TARGET:web-full-dev，找到该文件，可以找到vue源码入口
                    `src/platform/web/entry-runtime-with-compiler.js`，
                    ```javascript
                    import Vue from './runtime/index'
                    ```
                </div>
                <div :class="$style.actionList">
                    <span :class="$style.actionBtn">
                        <i class="iconfont icon-pinglun cursor-p" />
                        53222
                    </span>
                    <span :class="$style.actionBtn">
                        <i class="iconfont icon-good cursor-p" />
                        2233
                    </span>
                </div>
            </Card>
        </ul>
        <template v-slot:aside>
            <UserInfoCard />
            <RecommendCard />
            <CatalogCard />
        </template>
    </Layout>
</template>

<script>
import Layout from "@components/Layout";
import Card from "@components/Card";

import UserInfoCard from "@components/Aside/UserInfo";
import RecommendCard from "@components/Aside/Recommend";
import CatalogCard from "@components/Aside/Catalog";

export default {
    name: "app",
    data() {
        return {};
    },
    components: {
        Layout,
        Card,
        UserInfoCard,
        RecommendCard,
        CatalogCard
    },
    mounted() {}
};
</script>

<style lang="scss" module>
.abstract {
    height: 42px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 21px;
    font-size: 12px;
    font-weight: 400;
    color: #999;
    margin-bottom: 8px;
}

.noteList {
    .title {
        margin: -7px 0 4px;
        display: inherit;
        font-size: 18px;
        font-weight: 700;
        line-height: 1.5;
    }
}

.listCard {
    padding: 20px;

    &:not(:last-child) {
        border-bottom: 1px solid rgba(150, 150, 150, 0.14);
    }

    .title:link {
        color: #333;
    }

    .title:visited {
        color: #969696;
    }
}

.actionList {
    color: #b4b4b4;
    .actionBtn {
        margin-right: 10px;
    }
}
</style>

