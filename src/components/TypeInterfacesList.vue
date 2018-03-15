<template>
    <div :class="$style['type-column']">
        <div :class="$style['type-column-title']">{{'interfacesTitle' | format-message}}</div>
        <items-count :count="countInterfaces" messageKey="foundCountInterfacesMessage"/>
        <div :class="[$style['type-result-column']]">
            <div :class="$style['type-row']" v-for="i in typeInterfaces">
            <span :title="i">
                {{i}}
            </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import * as R from 'ramda';
    import ItemsCount from './ItemsCount.vue';
    import Vue from 'vue';
    import {mapGetters} from 'vuex';

    export default Vue.extend({
        components: {ItemsCount},
        computed: {
            ...mapGetters({
                typeInterfaces: 'getSelectedTypeInterfaces'
            }),
            countInterfaces: function (this: any) {
                return R.length(this.typeInterfaces);
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
        border: 1px solid #d9534f;
        color: #d9534f;
        composes: ts-row from '../styles/column.css';
    }

    .type-row span {
        color: #d9534f;
        font-weight: bold;
    }
</style>