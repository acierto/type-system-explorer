<template>
    <div :class="$style['type-column']">
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
    import {mapGetters} from 'vuex';

    export default Vue.extend({
        computed: mapGetters({
            interfaces: 'getSelectedTypeInterfaces'
        })
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