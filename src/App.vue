<template>
    <div id="app">
        <type-list></type-list>
        <type-properties-list></type-properties-list>
        <type-interfaces-list></type-interfaces-list>
        <type-super-types-list></type-super-types-list>
    </div>
</template>

<script>
    import TypeList from './components/TypeList.vue'
    import TypeInterfacesList from './components/TypeInterfacesList.vue'
    import TypePropertiesList from './components/TypePropertiesList.vue'
    import TypeSuperTypesList from './components/TypeSuperTypesList.vue'

    export default {
        components: {TypeList, TypeInterfacesList, TypePropertiesList, TypeSuperTypesList}
    }
</script>

<style>
    #app {
        display: flex;
        flex-flow: row;
        height: inherit;
    }
</style>