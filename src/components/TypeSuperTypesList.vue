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