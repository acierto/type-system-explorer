<template>
    <div id="app">
        <type-list></type-list>
        <type-properties-list></type-properties-list>
        <type-info-layout></type-info-layout>
        <property-info-layout></property-info-layout>
    </div>
</template>

<script>
    import TypeList from './components/TypeList.vue'
    import TypePropertiesList from './components/TypePropertiesList.vue'
    import TypeInfoLayout from './layouts/TypeInfoLayout'
    import PropertyInfoLayout from './layouts/PropertyInfoLayout';

    export default {
        components: {
            PropertyInfoLayout, TypeList, TypePropertiesList, TypeInfoLayout
        }
    }
</script>

<style>
    #app {
        display: flex;
        flex-flow: row;
        height: inherit;
    }
</style>