<template>
    <div :class="$style['type-column']">
        <div :class="$style['type-column-title']">{{'typeColumnTitle' | format-message}}</div>
        <items-count :count="countTypes" messageKey="foundCountTypesMessage" />
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
    import * as R from 'ramda';
    import Vue from 'vue';
    import AdvancedSearchModal from './advanced-search/AdvancedSearchModal.vue';
    import ItemsCount from './ItemsCount.vue';
    import {mapActions, mapGetters} from 'vuex';

    export default Vue.extend({
        components: {AdvancedSearchModal, ItemsCount},
        computed: {
            ...mapGetters({
                allTypes: 'getDisplayedTypes',
                selectedTypeName: 'getSelectedTypeName'
            }),
            countTypes: function () {
                return R.length(this.allTypes);
            }
        },
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
        padding: 9px 30px 9px 28px;
        width: 211px;
    }

    .type-column {
        composes: ts-column from '../styles/column.css';
    }

    .type-column-title {
        composes: ts-column-title from '../styles/column.css';
    }

    .type-result-column {
        composes: ts-result-column from '../styles/column.css';
    }

    .type-row {
        border: 1px solid #337ab7;
        color: #337ab7;
        composes: ts-row from '../styles/column.css';
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