<template>
    <div>
        <Header />
        <div class="layout-content">
            <div class="main">
                <slot></slot>
            </div>
            <div class="aside">
                <slot name="aside"></slot>
            </div>
        </div>
    </div>
</template>

    <script>
import Header from "@components/Header";

export default {
    name: "app",
    data() {
        return {};
    },
    components: {
        Header
    },
    mounted() {}
};
</script>

<style lang="scss">
.layout-content {
    width: 1080px;
    margin: 0 auto 20px;
    display: flex;
    justify-content: space-between;
    padding-top: $global-header-h + 20px;
}

.main {
    width: 720px;
}

.aside {
    width: 344px;
    flex-grow: 0;
}
</style>

