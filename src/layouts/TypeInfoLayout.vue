<template>
    <div :class="$style['type-info-layout']" v-if="isTemplateDisplayed()">
        <div :class="$style['top-panel']">
            <type-interfaces-list></type-interfaces-list>
            <type-super-types-list></type-super-types-list>
        </div>
        <additional-type-information></additional-type-information>
    </div>
</template>

<script>
    import Vue from 'vue';
    import AdditionalTypeInformation from '../components/AdditionalTypeInformation.vue';
    import TypeInterfacesList from '../components/TypeInterfacesList.vue';
    import TypeSuperTypesList from '../components/TypeSuperTypesList.vue';
    import {mapGetters} from 'vuex';

    export default Vue.extend({
        components: {AdditionalTypeInformation, TypeInterfacesList, TypeSuperTypesList},
        computed: mapGetters({
            hasSelectedType: 'hasSelectedType',
            hasSelectedProperty: 'hasSelectedProperty'
        }),
        methods: {
            isTemplateDisplayed: function () {
                return this.hasSelectedType && !this.hasSelectedProperty;
            }
        }
    })

</script>

<style module>
    .type-info-layout {
        display: flex;
        flex-basis: auto;
        flex-flow: column nowrap;
        flex-grow: 1;
        width: auto;
    }

    .top-panel {
        display: flex;
        flex-basis: auto;
        flex-flow: row;
        flex-grow: 1;
        flex-shrink: 1;
        max-height: 100%;
        min-height: 0;
        overflow: auto;
        width: auto;
    }
</style>