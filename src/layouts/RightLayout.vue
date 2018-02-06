<template>
    <div :class="$style['right-layout']">
        <div :class="$style['top-panel']">
            <type-super-types-list></type-super-types-list>
            <type-interfaces-list></type-interfaces-list>
        </div>
        <additional-type-information></additional-type-information>
    </div>
</template>

<script>
    import AdditionalTypeInformation from '../components/AdditionalTypeInformation.vue'
    import TypeInterfacesList from '../components/TypeInterfacesList.vue'
    import TypeSuperTypesList from '../components/TypeSuperTypesList.vue'

    export default {
        components: {AdditionalTypeInformation, TypeInterfacesList, TypeSuperTypesList}
    }
</script>

<style module>
    .right-layout {
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