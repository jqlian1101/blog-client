<template>
    <CommentList :dataSource="dataSource" @toggleRelpybox="showReplyBox = !showReplyBox">
        <template v-slot:boxArrow>
            <div class="boxArrow" v-if="showReplyBox" />
        </template>
        <ReplyBox :commentData="dataSource" :visible="showReplyBox" />
    </CommentList>
</template>

<script>
import ReplyBox from "./ReplyBox";
import CommentList from "./List";

export default {
    name: "Article",
    data() {
        return {
            articleDetail: {},
            commentList: [],
            showReplyBox: false
        };
    },
    components: {
        ReplyBox,
        CommentList
    },
    props: {
        dataSource: {
            type: Object,
            default: () => ({})
        }
    },
    mounted() {
        this.showReplyBox = this.dataSource.replies
            ? this.dataSource.replies.length > 0
            : false;
    }
};
</script>

