<template>
    <div :class="$style['property-details']">
        <div :class="$style['section-title']">Property Details</div>
        <div :class="$style['property-details-map']">
            <div :class="$style['property-details-content']">
                <div
                        :class="$style['property-details-row']"
                        v-for="(value, key) in selectedProperty">
                    <span :title="value" :class="$style['property-key']">
                        {{key}}
                    </span>
                    <span :class="$style['property-value']">
                        {{value}}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import {mapGetters} from 'vuex';

    export default Vue.extend({
        computed: mapGetters({
            selectedProperty: 'getSelectedProperty'
        })
    });
</script>

<style module>
    .property-details {
        display: flex;
        flex-basis: auto;
        flex-flow: column nowrap;
        flex-grow: 1;
        width: auto;
    }

    .section-title {
        display: inline-block;
        font-weight: bold;
        line-height: 30px;
        text-align: center;
        width: auto;
    }

    .property-details-map {
        display: flex;
        max-height: 100%;
        min-height: 0;
        overflow: auto;
        width: auto;
        height: 100%;
        flex-basis: auto;
        flex-flow: column nowrap;
        flex-grow: 1;
        flex-shrink: 1;
        font-size: 14px;
    }

    .property-details-content {
        border-spacing: 0 5px;
        display: table;
        margin: 0 auto;
        width: 95%;
    }

    .property-details-row {
        display: table-row;
    }

    .property-key {
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

    .property-value {
        display: table-cell;
        padding: 10px;
        width: auto;
        border: solid 1px black;
        border-radius: 0 30px 30px 0;
        border-left: none;
        font-weight: bold;
        word-break: break-word;
        max-width: none;
    }
</style>