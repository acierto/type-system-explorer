<template>
    <div :class="$style['type-column']">
        <div :class="$style['type-column-title']">{{'superTypesTitle' | format-message}}</div>
        <items-count :count="countSuperTypes" messageKey="foundCountSuperTypesMessage"/>
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
    import * as R from 'ramda';
    import ItemsCount from './ItemsCount.vue';
    import Vue from 'vue';
    import {mapGetters} from 'vuex'

    export default Vue.extend({
        components: {ItemsCount},
        computed: {
            ...mapGetters({
                supertypes: 'getSelectedTypeSuperTypes'
            }),
            countSuperTypes: function (this: any) {
                return R.length(this.supertypes);
            }
        }
    });
</script>

<style module>
    .type-column {
        composes: ts-column from '../styles/column.css';
    }

    .type-column-title {
        composes: ts-column-title from '../styles/column.css';
    }

    .type-result-column {
        flex: 1 100%;
        overflow: auto;
    }

    .type-row {
        border: 1px solid #5bc0de;
        color: #5bc0de;
        composes: ts-row from '../styles/column.css';
    }

    .type-row span {
        color: #5bc0de;
        font-weight: bold;
    }
</style>