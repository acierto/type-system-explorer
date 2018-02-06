<template>
    <div id="app">
        <type-list></type-list>
        <type-properties-list></type-properties-list>
        <right-layout></right-layout>
    </div>
</template>

<script>
    import TypeList from './components/TypeList.vue'
    import TypePropertiesList from './components/TypePropertiesList.vue'
    import RightLayout from './layouts/RightLayout'

    export default {
        components: {TypeList, TypePropertiesList, RightLayout}
    }
</script>

<style>
    #app {
        display: flex;
        flex-flow: row;
        height: inherit;
    }
</style>