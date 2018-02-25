<template>
    <div :class="$style['type-column']">
        <div :class="$style['type-column-title']">SuperTypes</div>
        <div :class="[$style['type-result-column']]">
            <div :class="$style['type-row']" v-for="s in supertypes">
            <span :title="s">
                {{s}}
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
            supertypes: 'getSelectedTypeSuperTypes'
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
        border: 1px solid #5bc0de;
        color: #5bc0de;
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
        color: #5bc0de;
        font-weight: bold;
    }
</style>