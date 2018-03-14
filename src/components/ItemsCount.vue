<template>
    <div :class="$style['message']" v-if="count > 0">{{this.displayedMessage}}</div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {formatMessage} from "vue-ts-locale";

    export default Vue.extend({
        props: {
            count: Number,
            messageKey: String
        },
        computed: {
            displayedMessage: function (this: any) {
                return formatMessage(this.messageKey, {count: this.count});
            }
        }
    });
</script>

<style module>
    .message {
        font-size: 10px;
        text-align: center;
    }
</style>