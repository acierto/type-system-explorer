<template>
    <div :class="$style['type-column']" v-if="isTemplateDisplayed">
        <div :class="$style['type-column-title']">Properties</div>
        <div :class="[$style['type-result-column']]">
            <div
                :class="[$style['property-row'], {[$style['property-row-selected']]: selectedPropertyName === p.name}]"
                :data-value="p.name"
                v-for="p in properties"
                @click="selectProperty">
                <span :data-value="p.name" :title="p.name">
                    {{p.name}}
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
            isTemplateDisplayed: 'hasSelectedType',
            properties: 'getSelectedTypeProperties',
            selectedPropertyName: 'getSelectedPropertyName'
        }),
        methods: mapActions([
            'selectProperty'
        ])
    });
</script>

<style module>
    .type-column {
        display: flex;
        flex-flow: column;
        height: inherit;
        width: 220px;
    }

    .type-column-title {
        display: inline-block;
        font-weight: bold;
        line-height: 30px;
        text-align: center;
        width: auto;
    }

    .type-result-column {
        flex: 1 100%;
        overflow: auto;
    }

    .property-row {
        border: 1px solid #398439;
        color: #398439;
        font-weight: bold;
        font-size: 12px;
        margin: 5px;
        min-height: 40px;
        overflow: hidden;
        padding: 10px;
        text-decoration: none;
        text-overflow: ellipsis;
        white-space: nowrap;
        background-color: #fff;
    }

    .property-row:hover {
        background-color: #398439;
        cursor: pointer;
    }

    .property-row span {
        color: #449d44;
        font-weight: bold;
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