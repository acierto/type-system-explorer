<template>
    <div id="app">
        <top-panel/>
        <div class="vertical-split">
            <div class="horizontal-split">
                <type-list/>
                <type-properties-list/>
            </div>
            <type-info-layout/>
        </div>
        <property-info-layout/>
    </div>
</template>

<script>
    import TypeList from './components/TypeList.vue'
    import TopPanel from './components/TopPanel.vue'
    import TypePropertiesList from './components/TypePropertiesList.vue'
    import TypeInfoLayout from './layouts/TypeInfoLayout'
    import PropertyInfoLayout from './layouts/PropertyInfoLayout';

    export default {
        components: {
            PropertyInfoLayout, TypeList, TypePropertiesList, TypeInfoLayout, TopPanel
        }
    }
</script>

<style>
    #app {
        display: flex;
        flex-flow: row;
        height: inherit;
    }

    .top-plugin-panel {
        background-color: #337ab7;
        border: 1px solid #337ab7;
        height: 40px;
        max-height: 40px;
        min-height: 40px;
        position: absolute;
        width: 100%;
    }

    .vertical-split {
        display: flex;
        height: inherit;
        flex-flow: column nowrap;
        margin-top: 40px;
    }

    .horizontal-split {
        display: flex;
        height: 50%;
        flex-flow: row nowrap;
    }
</style>