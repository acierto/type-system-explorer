<template>
    <div id="app">
        <type-list></type-list>
        <type-properties-list></type-properties-list>
    </div>
</template>

<script>
    import TypeList from './components/TypeList.vue'
    import TypePropertiesList from './components/TypePropertiesList.vue'

    export default {
        components: {TypeList, TypePropertiesList}
    }
</script>

<style>
    #app {
        display: flex;
        flex-flow: row;
        height: inherit;
    }
</style>