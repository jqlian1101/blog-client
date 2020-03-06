<template>
    <div :class="$style.root">
        <div :class="$style.headerInner">
            <div :class="$style.left">
                <a href="/" :class="$style.logo">
                    <!-- <img src="../../assets/logo.png" alt /> -->
                </a>
                <ul :class="$style.tabs">
                    <a href="/">
                        <li :class="$style.isActive">首页</li>
                    </a>
                    <a href="/">
                        <li>发现</li>
                    </a>
                    <a href="/">
                        <li>等你来答</li>
                    </a>
                </ul>
            </div>
            <div :class="$style.right">
                <div :class="$style.search">
                    <el-input
                        placeholder="请输入内容"
                        suffix-icon="el-icon-search"
                        v-model="searchValue"
                    ></el-input>
                </div>
                <div :class="$style.userInfo">登录 | 注册</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            searchValue: ""
        };
    },
    components: {},
    methods: {}
};
</script>

<style module lang="scss" src="./index.scss"></style>
