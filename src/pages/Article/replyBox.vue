<template>
    <div :class="$style.boxRoot">
        <slot :clickReply="togglePanelVisible" :arrowCls="$style.arrowCls" :showBox="showBox"></slot>
        <div :class="[$style.panel, showBox ? $style.show : '']">
            <div :class="$style.emptyComment">
                <div>
                    <i class="iconfont icon-suggest" :class="$style.emptyIcon"></i>
                </div>
                <p>暂无评论</p>
            </div>
            <div :class="$style.replyForm">
                <div :class="$style.card">
                    <textarea
                        row="1"
                        maxlength="1024"
                        placeholder="评论审核通过后显示"
                        v-model="replyContent"
                    />
                </div>
                <button>评论</button>
            </div>
        </div>
    </div>
</template>

<script>
import { articleService } from "@api";

export default {
    name: "ReplyBox",
    data() {
        return {
            showBox: false,
            replyContent: ""
        };
    },
    components: {},
    mounted() {},
    methods: {
        togglePanelVisible() {
            this.showBox = !this.showBox;
        },

        async submitComment() {
            const { articleInfo } = this.$attrs;
            const value = this.textAreaValue;
            if (!value) return;
            if (value.length > 200) return this.$message("最多可输入200个字符");

            await articleService.comment({
                topicId: articleInfo.id,
                content: value
            });
            this.$message.success("发表成功");
        }
    }
};
</script>

<style lang="scss" module>
$pad-16: 16px;

.boxRoot {
    position: relative;
}

.panel {
    height: 0;
    overflow: hidden;
    margin-top: 9px;

    &.show {
        height: auto;
        border: 1px solid #eaeaea;
    }

    .emptyComment {
        padding: $pad-16;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #909090;

        .emptyIcon {
            font-size: 48px;
            color: #eaeaea;
        }
    }
}

.arrowCls {
    position: relative;
    :global {
        .boxArrow {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;

            &::before {
                content: "";
                position: absolute;
                left: 0;
                border-color: transparent transparent #eaeaea;
                border-style: solid;
                border-width: 0 8px 10px;
                top: 100%;
            }

            &::after {
                content: "";
                position: absolute;
                top: calc(100% + 2px);
                left: 0;
                border-color: transparent transparent #fff;
                border-style: solid;
                border-width: 0 8px 8px;
            }
        }
    }
}

.replyForm {
    margin-top: 15px;
    margin-bottom: 10px;
    display: flex;
    justify-content: flex-start;
    height: auto;
    padding: 0 $pad-16;

    .card {
        flex-grow: 5;
        border: 1px solid #ddd;
    }

    textarea {
        width: 100%;
        height: 28px;
        padding: 6px;
        border-radius: 3px;
        resize: none;
        outline: none;
    }

    button {
        flex-grow: 1;
        flex-basis: 75px;
        min-width: 75px;
        height: 30px;
        margin-left: 8px;
        font-size: 14px;
        text-align: center;
        background-color: #007fff;
        color: #fff;
        border-radius: 2px;
        cursor: pointer;
    }
}
</style>

