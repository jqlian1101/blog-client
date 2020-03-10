<template>
    <Layout>
        <div :class="$style.content">
            <div>
                <blockquote>
                    <p>2019 年 11 月 14 日凌晨，在微软服务 23 年的微软全球执行副总裁沈向洋博士宣布离开微软；2020 年 3 月 5 日，清华大学在线上举行了活动“沈向洋双聘教授聘任仪式暨春风讲堂第四讲”，沈向洋博士离开微软后的首个去向得以确认。会后，沈向洋发表了主题为 “如何设计和构建负责任的 AI” 的全英文演讲，InfoQ 对重点内容进行了整理。</p>
                </blockquote>
                <p>由于受到疫情影响，沈向洋教授无法到达现场，本次活动采用了两地连线直播的形式，通过清华大学春风讲堂的 B 站账号对外直播。2005 年，沈向洋曾以双聘教师的身份在清华任教，并于 2015 年参与了清华、华盛顿大学、微软共同成立的全球创新学院（GIX）。</p>
                <p>因此，本次在线直播为续聘仪式，清华大学副校长杨斌主持了颁奖活动，校长邱勇在活动开始前进行了致辞，对沈向洋教授的加入表示欢迎。随后，沈向洋在致辞中表达了对中国人工智能发展的信心，同时也期待能够早日在清华园里，与师生们一起工作、生活。</p>
                <p>
                    <img
                        src="https://static001.infoq.cn/resource/image/e4/a0/e433057dc4c67a36e44cc5158dc606a0.jpg"
                        alt
                    />
                </p>
                <center>清华大学校长邱勇向沈向洋正式颁发聘书</center>
                <p>仪式过后，沈向洋进行了一次线上授课演讲，分享了他对 AI 可解释性与 AI 偏见相关问题的研究与看法。</p>
                <p>由于演讲为全英文，InfoQ 整理了重点内容供广大开发者参考。</p>
                <h2>沈向洋：如何设计和构建负责任的 AI</h2>
                <p>
                    <img
                        src="https://static001.infoq.cn/resource/image/e3/6d/e31aff7ba65b4409c0fd6106271e956d.jpg"
                        alt
                    />
                </p>
            </div>
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

import Comment from "./comment";

export default {
    name: "Article",
    data() {
        return {};
    },
    components: {
        Layout,
        // UserInfoCard,
        RecommendCard,
        // CatalogCard,
        Comment
    },
    mounted() {}
};
</script>

<style lang="scss" module>
.content {
    background: #fff;
    padding: 20px;
}
</style>

