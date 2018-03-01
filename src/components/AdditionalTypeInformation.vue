<template>
    <div :class="$style['additional-type-information']">
        <div :class="$style['title']">Additional type information</div>
        <div :class="$style['properties-table']">
            <div :class="$style['properties-table-content']">
                <div v-for="{key, value} in this.getSortedKeyValues()" :class="$style['table-property']">
                    <span :title="value" :class="$style['table-property-key']">
                        {{key}}
                    </span>
                    <span :class="$style['table-property-value']">
                        {{value}}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {mapGetters} from 'vuex';
    import * as R from 'ramda';

    export default Vue.extend({
        computed: mapGetters({
            additionalTypeInformation: 'getAdditionalTypeInformation'
        }),
        methods: {
            getSortedKeyValues: function (this: any) {
                return R.pipe(
                    R.keys,
                    R.sort((v1: string, v2: string) => v1.localeCompare(v2)),
                    R.map((key: string) => ({key, value: this.additionalTypeInformation[key]}))
                )(this.additionalTypeInformation);
            }
        }
    });
</script>

<style module>
    .additional-type-information {
        border: solid 1px #337ab7;
        border-radius: 36px;
        font-size: 12px;
        height: 50%;
        margin: 15px;
        max-height: 50%;
        min-height: 50%;
        padding: 0 15px;
        width: auto;
    }

    .properties-table {
        composes: ts-table from '../styles/table.css';
        height: calc(100% - 60px);
    }

    .properties-table-content {
        composes: ts-table-content from '../styles/table.css';
    }

    .table-property {
        display: table-row;
    }

    .table-property-key {
        composes: ts-table-key from '../styles/table.css';
    }

    .table-property-value {
        composes: ts-table-value from '../styles/table.css';
        max-width: 500px;
    }

    .title {
        font-size: 20px;
        padding: 15px;
        text-align: center;
    }
</style>