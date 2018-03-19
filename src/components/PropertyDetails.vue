<template>
    <div :class="$style['property-details']">
        <div :class="$style['section-title']">{{'propertyDetailsTitle' | format-message}}</div>
        <items-count :count="countAttributes" messageKey="foundCountAttributesMessage"/>
        <div :class="$style['property-details-map']">
            <div :class="$style['property-details-content']">
                <div
                        :class="$style['property-details-row']"
                        v-for="{key, value} in selectedProperty">
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
    import * as R from 'ramda';
    import ItemsCount from './ItemsCount.vue';
    import Vue from 'vue';
    import {mapGetters} from 'vuex';

    export default Vue.extend({
        components: {ItemsCount},
        computed: {
            ...mapGetters({
                selectedProperty: 'getSelectedProperty'
            }),
            countAttributes: function () {
                return R.keys(this.selectedProperty).length;
            }
        }
    });
</script>

<style module>
    .property-details {
        composes: ts-flex-column from '../styles/flex.css';
        height: inherit;
        width: 400px;
    }

    .section-title {
        composes: ts-column-title from '../styles/column.css';
    }

    .property-details-map {
        composes: ts-table from '../styles/table.css';
        height: inherit;
        margin: inherit;
        width: 400px;
    }

    .property-details-content {
        composes: ts-table-content from '../styles/table.css';
    }

    .property-details-row {
        display: table-row;
    }

    .property-key {
        composes: ts-table-key from '../styles/table.css';
    }

    .property-value {
        composes: ts-table-value from '../styles/table.css';
        max-width: none;
    }
</style>