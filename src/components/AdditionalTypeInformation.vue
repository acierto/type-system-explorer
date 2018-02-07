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
        display: flex;
        flex-basis: auto;
        flex-flow: column nowrap;
        flex-grow: 1;
        flex-shrink: 1;
        height: calc(100% - 60px);
        max-height: 100%;
        min-height: 0;
        overflow: auto;
        width: auto;
    }

    .properties-table-content {
        border-spacing: 0 5px;
        display: table;
        margin: 0 auto;
        width: 95%;
    }

    .table-property {
        display: table-row;
    }

    .table-property-key {
        display: table-cell;
        padding: 10px;
        width: 200px;
        background-color: #337ab7;
        border: solid 1px black;
        border-radius: 30px 0 0 30px;
        border-right: none;
        color: #fff;
        font-weight: bold;
        min-width: 150px;
        text-align: center;
        vertical-align: middle;
    }

    .table-property-value {
        display: table-cell;
        padding: 10px;
        width: auto;
        border: solid 1px black;
        border-radius: 0 30px 30px 0;
        border-left: none;
        font-weight: bold;
        word-break: break-word;
        max-width: 500px;
    }

    .title {
        font-size: 20px;
        padding: 15px;
        text-align: center;
    }
</style>