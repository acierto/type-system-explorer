<template>
    <div :class="$style['type-column']" v-if="isTemplateDisplayed">
        <div :class="$style['type-column-title']">{{'propertiesTitle' | format-message}}</div>
        <items-count :count="countProperties" messageKey="foundCountPropertiesMessage" />
        <div :class="[$style['type-result-column']]">
            <div
                    :class="[$style['property-row'], {[$style['property-row-selected']]: selectedPropertyName === p.name}]"
                    :data-value="p.name"
                    v-for="p in properties"
                    @click="selectProperty">
                <span :data-value="p.name" :title="p.name">
                    {{p.name}} <span v-if="p.required" :class="$style['required']">*</span>
                </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import * as R from 'ramda';
    import ItemsCount from './ItemsCount.vue';
    import Vue from 'vue';
    import {mapActions, mapGetters} from 'vuex';

    export default Vue.extend({
        components: {ItemsCount},
        computed: {
            ...mapGetters({
                isTemplateDisplayed: 'hasSelectedType',
                properties: 'getSelectedTypeProperties',
                selectedPropertyName: 'getSelectedPropertyName'
            }),
            countProperties: function () {
                return R.length(this.properties);
            }
        },
        methods: mapActions([
            'selectProperty'
        ])
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

    .property-row {
        composes: ts-row from '../styles/column.css';
        background-color: #fff;
        border: 1px solid #398439;
        color: #398439;
    }

    .property-row:hover {
        background-color: #398439;
        cursor: pointer;
    }

    .property-row span {
        color: #449d44;
        font-weight: bold;
    }

    .property-row span .required {
        color: red;
    }

    .property-row:hover span {
        color: #fff;
        cursor: pointer;
    }

    .property-row-selected {
        background-color: #449d44;
    }

    .property-row-selected span {
        color: white;
    }
</style>