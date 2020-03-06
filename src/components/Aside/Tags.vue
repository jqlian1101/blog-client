<template>
    <Card class="aside-card">
        <!--
            标签
        -->
        <div class="card-title">热门标签</div>
        <div class="card-cont">
            <ul class="clearfix">
                <li class="fll">
                    <router-link to="/tags/aa" :class="$style.tag">aa</router-link>
                </li>
            </ul>
        </div>
    </Card>
</template>

<script>
import Card from "@components/Card";

export default {
    name: "Tags",
    data() {
        return {};
    },
    components: {
        Card
    },
    mounted() {}
};
</script>

<style lang="scss" module>
.tag {
    display: inline-block;
    padding: 4px 14px;
    border: 1px solid #ccc;
    border-radius: 5px;
    color: #666;
    font-size: 12px;
    transition: all 0.3s ease 0s;
    margin: 0 10px 10px 0;

    &:hover {
        border-color: $highlight-color;
    }
}
</style>

