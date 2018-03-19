<template>
    <div :class="$style['property-details']">
        <div :class="$style['section-title']">{{'propertyDetailsTitle' | format-message}}</div>
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
        composes: ts-flex-column from '../styles/flex.css';
        height: inherit;
    }

    .section-title {
        composes: ts-column-title from '../styles/column.css';
    }

    .property-details-map {
        composes: ts-table from '../styles/table.css';
        height: inherit;
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