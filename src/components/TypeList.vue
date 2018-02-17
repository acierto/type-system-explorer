<template>
    <div :class="$style['type-column']">
        <div :class="$style['type-column-title']">Types</div>
        <div :class="$style['search']">
            <i i class="fa fa-search" :class="$style['search-icon']" aria-hidden="true"></i>
            <input type="text" placeholder="Search" @input="searchByToken">
            <advanced-search-modal></advanced-search-modal>
        </div>
        <div :class="$style['type-result-column']">
            <div
                    @click="selectType"
                    :class="[$style['type-row'], {[$style['type-row-selected']]: selectedTypeName === t.type}]"
                    :data-value="t.type"
                    v-for="t in allTypes">
            <span :data-value="t.type" :title="t.type">
                {{t.type}}
            </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import AdvancedSearchModal from './advanced-search/AdvancedSearchModal.vue';
    import {mapActions, mapState} from 'vuex';

    export default Vue.extend({
        components: {AdvancedSearchModal},
        computed: mapState({
            allTypes: (state: any) => state.types.displayedTypes,
            selectedTypeName: (state: any) => state.types.selectedType.type
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

    .type-column-title {
        display: inline-block;
        font-weight: bold;
        line-height: 30px;
        text-align: center;
        width: auto;
    }

    .type-result-column {
        flex: 1 100%;
        overflow: auto;
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
        background-color: #286090;
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

    .type-row-selected {
        background-color: #337ab7;
    }

    .type-row-selected:hover {
        background-color: #337ab7;
    }

    .type-row-selected span {
        color: #fff;
    }

</style>