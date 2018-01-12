<template>
    <div class="type-column">
        <div class="type-row" v-for="t in allTypes">
            <span :title="t.type">
                {{t.type}}
            </span>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex'

    export default {
        computed: mapState({
            allTypes: state => state.types.all
        }),
        methods: mapActions([
            'getTypes'
        ]),
        created() {
            this.getTypes()
        }
    }
</script>

<style>

    .type-column {
        overflow: auto;
        width: 220px;
        flex: 1 100%;
    }

    .type-row {
        border: 1px solid #337ab7;
        color: #337ab7;
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

    .type-row-active {
        border: 1px solid #337ab7;
        color: #fff;
        font-weight: bold;
        font-size: 12px;
        margin: 5px;
        min-height: 40px;
        overflow: hidden;
        padding: 10px;
        text-decoration: none;
        text-overflow: ellipsis;
        white-space: nowrap;
        background-color: #337ab7;
        cursor: pointer;
    }

    .type-row-active span {
        color: #fff;
        cursor: pointer;
        font-weight: bold;
        font-size: 12px;
        white-space: nowrap;
    }

    .type-row span {
        color: #337ab7;
        font-weight: bold;
        font-size: 12px;
        white-space: nowrap;
    }
</style>