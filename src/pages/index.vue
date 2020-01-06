<template>
    <div class="$style.root">Hello World</div>
</template>

<script>
import { IEVersion } from "utils/util";

window.__IEVersion__ = IEVersion();

const support =
    window.__IEVersion__ < 0 ||
    window.__IEVersion__ >= 9 ||
    window.__IEVersion__ === "edge";

export default {
    name: "app",
    data() {
        return {
            support
        };
    },
    components: {},
    mounted() {}
};
</script>

<style module lang="scss">
.root {
    width: 100%;
    height: 100%;
    overflow: auto;
}
</style>

