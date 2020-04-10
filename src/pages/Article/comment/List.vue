<template>
    <div :class="$style.box">
        <div :class="$style.userPopoverBox"></div>
        <div :class="$style.listContent">
            <div :class="$style.userInfo">
                <div :class="$style.userName">游客</div>
            </div>
            <div :class="$style.content">{{dataSource.content}}</div>
            <div :class="$style.actionList">
                <span :class="$style.actionBtn">
                    <i class="iconfont icon-good cursor-p" />
                    {{dataSource.likeNum}}
                </span>
                <div
                    :class="[$style.actionBtn, $style.arrowCls]"
                    v-if="!!dataSource.replies"
                    @click="$emit('toggleRelpybox')"
                >
                    <i class="iconfont icon-pinglun cursor-p" />
                    {{dataSource.replies.length}}
                    <slot name="boxArrow"></slot>
                </div>
                <span :class="$style.actionBtn">{{dataSource.createDate}}</span>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
// import ReplyBox from "./replyBox";

export default {
    name: "CommentList",
    data() {
        return {};
    },
    components: {
        // ReplyBox
    },
    props: {
        dataSource: {
            type: Object,
            default: () => ({})
        },
        allowReply: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style lang="scss" module>
.box {
    position: relative;
    overflow: hidden;

    .userPopoverBox {
        position: absolute;
        top: 0;
        left: 0;
        width: 38px;
        height: 38px;
        border-radius: 50%;
        line-height: 38px;
        text-align: center;
        background: url("~@/assets/user.png");
        background-size: contain;
    }

    .listContent {
        margin-left: 46px;
        margin-top: 6px;
        min-height: 40px;
    }

    .userInfo {
        display: flex;
        .userName {
            font-size: 14px;
            font-weight: 600;
            color: #333;
        }
    }

    .content {
        font-size: 14px;
        line-height: 1.7;
        color: #333;
        margin: 6px 0 8px;
    }

    .actionList {
        color: #b4b4b4;
        display: flex;
        align-content: flex-start;
        .actionBtn {
            display: flex;
            align-items: center;

            &:not(:last-child) {
                margin-right: 18px;
            }

            i {
                margin-right: 4px;
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
                z-index: 10;

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
                    top: calc(100% + 3px);
                    left: 0;
                    border-color: transparent transparent #fff;
                    border-style: solid;
                    border-width: 0 8px 8px;
                }
            }
        }
    }
}
</style>

