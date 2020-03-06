<template>
    <Card class="aside-card">
        <!--
            1、没有登录，显示快捷登录入口
            2、支持第三方平台登录
            3、已登录，因此
        -->
        <div class="card-title">登录/注册</div>
    </Card>
</template>

<script>
import Card from "@components/Card";

export default {
    name: "UserInfoCard",
    data() {
        return {};
    },
    components: {
        Card
    },
    mounted() {}
};
</script>

<style lang="scss">
</style>

