<template>
    <div class="card" :class="className">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "Card",
    data() {
        return {};
    },
    props: {
        className: {
            type: String,
            default: ""
        }
    },
    components: {},
    methods: {}
};
</script>

<style lang="scss">
.card {
    background: #fff;
    box-shadow: 0 1px 3px rgba(27, 95, 160, 0.1);

    .card-title {
        font-size: 14px;
        color: #333;
        display: flex;
        justify-content: space-between;
        padding-left: 12px;
        border-left: 4px solid #ec7259;
        font-size: 16px;
        font-weight: 500;
        height: 20px;
        line-height: 20px;
        margin-bottom: 10px;
    }

    .card-cont {
        padding-top: 10px;
    }
}

.aside-card {
    padding: 14px;
    margin-bottom: 10px;
}
</style>
