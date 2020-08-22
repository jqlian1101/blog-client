<template>
    <div :class="$style.boxRoot">
        <div :class="[$style.panel, visible ? $style.show : '']">
            <ul v-if="isHaveReply">
                <li :class="$style.list" v-for="item in replies" :key="item.id">
                    <CommentList :dataSource="item" type="3" />
                </li>
            </ul>
            <div :class="$style.emptyComment" v-else>
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
                <button @click="sendReply">评论</button>
            </div>
        </div>
    </div>
</template>

<script>
import { articleService } from "@api";

import CommentList from "./List";

export default {
    name: "ReplyBox",
    data() {
        return {
            replyContent: "",
            replies: []
        };
    },
    components: {
        CommentList
    },
    props: {
        commentData: {
            type: Object,
            default: () => ({})
        },
        visible: {
            type: Boolean,
            default: false
        }
    },
    watch: {
        "commentData.replies"(data) {
            this.replies = data || [];
        }
    },
    computed: {
        isHaveReply() {
            return this.replies.length > 0;
        }
    },
    mounted() {
        this.replies = this.commentData.replies || [];
    },
    methods: {
        /**
         * 获取回复列表
         */
        async getReplyList() {
            const { id } = this.commentData;
            if (!id) return;

            const res = await articleService.getReplyList({ id });
            this.replies = res.data.result || [];
        },

        /**
         * 回复评论
         */
        async sendReply() {
            const { id } = this.commentData;
            if (!id) return;

            const { replyContent } = this;

            await articleService.sendReply({
                commentId: id,
                content: replyContent
            });

            this.replyContent = "";
            this.$message({ message: "发表成功", type: "success" });

            // 刷新评论列表
            this.getReplyList();
            this.$emit("replySuccess");
        }
    }
};
</script>

<style lang="scss" module>
$pad-16: 16px;

.boxRoot {
    position: relative;

    .list {
        padding: 16px;
    }
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

