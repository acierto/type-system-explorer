<template>
    <div :class="$style['type-column']" v-if="isTemplateDisplayed">
        <div :class="$style['type-column-title']">Interfaces</div>
        <div :class="[$style['type-result-column']]">
            <div :class="$style['type-row']" v-for="i in interfaces">
            <span :title="i">
                {{i}}
            </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {mapActions, mapGetters} from 'vuex'

    export default Vue.extend({
        computed: mapGetters({
            interfaces: 'getSelectedTypeInterfaces',
            isTemplateDisplayed: 'hasSelectedType'
        })
    });
</script>

<style module>
    .type-column {
        display: flex;
        flex-flow: column;
        height: inherit;
        width: 220px;
    }

    .type-column-title {
        display: inline-block;
        font-weight: bold;
        line-height: 30px;
        text-align: center;
        width: auto;
    }

    .type-result-column {
        flex: 1 100%;
        overflow: auto;
    }

    .type-row {
        border: 1px solid #d9534f;
        color: #d9534f;
        font-weight: bold;
        font-size: 12px;
        margin: 5px;
        min-height: 40px;
        overflow: hidden;
        padding: 10px;
        text-decoration: none;
        text-overflow: ellipsis;
        white-space: nowrap;
        background-color: #fff;
    }

    .type-row span {
        color: #d9534f;
        font-weight: bold;
    }
</style>