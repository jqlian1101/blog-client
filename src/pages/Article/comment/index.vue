<template>
    <CommentList
        :dataSource="dataSource"
        @toggleRelpybox="showReplyBox = !showReplyBox"
        :replyNum="replyNum"
        type="2"
    >
        <template v-slot:boxArrow>
            <div class="boxArrow" v-if="showReplyBox" />
        </template>
        <ReplyBox :commentData="dataSource" :visible="showReplyBox" @replySuccess="replySuccess" />
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
            showReplyBox: false,
            replyNum: 0
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
    watch: {
        "dataSource.replies"(replies = []) {
            this.resetReplyNum(replies.length);
        }
    },
    mounted() {
        this.init();
    },
    methods: {
        /**
         * 初始化页面数据
         */
        init() {
            const { replies = [] } = this.dataSource;
            this.showReplyBox = replies.length > 0;
            this.resetReplyNum(replies.length);
        },

        resetReplyNum(num = 0) {
            this.replyNum = num;
        },

        replySuccess() {
            this.replyNum += 1;
        }
    }
};
</script>

