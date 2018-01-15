<template>
    <div :class="$style['type-column']">
        <div :class="$style['type-column-title']">Types</div>
        <div :class="$style['search']">
            <i class="glyphicon glyphicon-search"></i>
            <input type="text" placeholder="Search">
            <i class="glyphicon glyphicon-filter"></i>
        </div>
        <div :class="$style['type-row']" v-for="t in allTypes">
            <span :title="t.type">
                {{t.type}}
            </span>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {mapActions, mapState} from 'vuex'

    export default Vue.extend({
        computed: mapState({
            allTypes: (state: any) => state.types.all
        }),
        methods: mapActions([
            'getTypes'
        ]),
        created() {
            this.getTypes()
        }
    });
</script>

<style>
    .glyphicon-search {
        color: grey;
        font-size: 24px;
        left: 10px;
        position: absolute;
        top: 10px;
    }
</style>

<style module>
    .search {
        color: grey;
        display: block;
        height: 40px;
        margin-top: 5px;
        position: relative;
    }

    .search input {
        font-size: 13px;
        margin: 0 0 0 5px;
        padding: 9px 10px 9px 28px;
        width: 211px;
    }

    .type-column {
        overflow: auto;
        width: 220px;
        flex: 1 100%;
    }

    .type-column-title {
        font-weight: bold;
        line-height: 30px;
        text-align: center;
        width: auto;
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

    .type-row:hover {
        background-color: #337ab7;
        cursor: pointer;
    }

    .type-row span {
        color: #337ab7;
        font-weight: bold;
    }

    .type-row:hover span {
        color: #fff;
        cursor: pointer;
    }

</style>