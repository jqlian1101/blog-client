<template>
    <div :class="$style.comment">
        <div :class="$style.textAreaWrap">
            <textarea placeholder="写下你的评论..." v-model="textAreaValue"></textarea>
            <div :class="$style.operationWrap">
                <div :class="$style.emoji">
                    <!-- <i class="iconfont icon-smile cursor-p" @click="toggleEmojiVisible(true)" />
                    <VEmojiPicker @selectEmoji="selectEmoji" v-if="emojiVisible" />-->
                </div>
                <div :class="$style.right">
                    <button :class="$style.sure" class="noselect cursor-p" @click="submitComment">发布</button>
                    <!-- <button :class="$style.cancel" class="noselect cursor-p">取消</button> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import VEmojiPicker from "./VEmojiPicker";
import { articleService } from "@api";

export default {
    name: "Comment",
    data() {
        return {
            textAreaValue: "",
            emojiVisible: false
        };
    },
    components: {
        // VEmojiPicker
    },
    mounted() {
    },
    methods: {
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
        // selectEmoji(emoji) {
        //     console.log(emoji);
        //     const { data } = emoji;
        //     this.textAreaValue += data;
        // },
        // toggleEmojiVisible(bool) {
        //     console.log(bool);
        //     this.emojiVisible = bool;
        // }
    }
};
</script>

<style lang="scss" module>
.comment {
    margin-top: 20px;
}
.textAreaWrap {
    // border: 1px solid #dcdfe6;

    textarea {
        width: 100%;
        height: 90px;
        font-size: 12px;
        border: 1px solid #eee;
        border-radius: 4px;
        background-color: #fafafa;
        resize: none;
        display: inline-block;
        vertical-align: top;
        outline-style: none;
        padding: 4px;
    }
}

.operationWrap {
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
    font-size: 14px;
    color: #969696;

    .emoji {
        i {
            font-size: 22px;
            margin-right: 12px;
        }
    }

    .right {
        flex-shrink: 0;
        display: flex;
        align-items: center;
        button {
            position: relative;
            flex-shrink: 0;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: 50px;
            touch-action: manipulation;
            background-image: none;
            white-space: nowrap;
            transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
            font-size: 14px;
            padding: 4px 12px;
            color: #969696;
            background-color: #fff;
            border: 1px solid #999;
        }

        .sure {
            color: #fff;
            background-color: #ec7259;
            border-color: #ec7259;
        }

        .cancel {
            margin-left: 8px;
            color: #999;
            background-color: #fff;
            border-color: #999;
        }
    }
}
</style>

