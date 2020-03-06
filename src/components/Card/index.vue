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
        border-bottom: 1px solid hsla(0, 0%, 58.8%, 0.1);
        margin: 0 -20px;
        padding: 0 20px 8px;
    }

    .card-cont{
        padding-top: 10px;
    }
}

.aside-card {
    padding: 14px;
    margin-bottom: 10px;
}
</style>
