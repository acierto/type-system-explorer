<template>
    <div :class="$style['type-column']">
        <div :class="$style['type-column-title']">Types</div>
        <div :class="$style['search']">
            <i i class="fa fa-search" :class="$style['search-icon']" aria-hidden="true"></i>
            <input type="text" placeholder="Search" @input="searchByToken">
            <i class="fa fa-filter" :class="$style['filter-icon']" aria-hidden="true"></i>
        </div>
        <div :class="$style['type-result-column']">
            <div :class="$style['type-row']" v-for="t in allTypes" @click="selectType" :data-value="t.type">
            <span :title="t.type">
                {{t.type}}
            </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {mapActions, mapState} from 'vuex'

    export default Vue.extend({
        computed: mapState({
            allTypes: (state: any) => state.types.displayed
        }),
        methods: mapActions([
            'getTypes',
            'searchByToken',
            'selectType'
        ]),
        created() {
            this.getTypes()
        }
    });
</script>

<style module>
    .search-icon {
        color: grey;
        font-size: 24px;
        left: 10px;
        position: absolute;
        top: 8px;
    }

    .filter-icon {
        color: #337ab7;
        cursor: pointer;
        font-size: 24px;
        left: 185px;
        position: absolute;
        top: 8px;
    }

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
        display: flex;
        flex-flow: column;
        height: inherit;
        width: 220px;
    }

    .type-result-column {
        flex: 1 100%;
        overflow: auto;
    }

    .type-column-title {
        display: inline-block;
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