<template>
    <div>
        <i class="fa fa-filter"
           :class="{
            [$style['filter-icon']]: !this.filterOn,
            [$style['applied-advanced-filter-icon']]: this.filterOn}"
           @click="showModal"
           aria-hidden="true"></i>
        <b-modal ref="myModalRef" hide-footer :title="'advancedSearchModalTitle' | format-message">
            <filter-by-interfaces/>
            <filter-by-property-names/>
            <filter-by-super-types/>
            <b-btn class="mt-3 apply-search-criteria" variant="outline-danger" block @click="applyFilter">
                {{'applyButton' | format-message}}
            </b-btn>
        </b-modal>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import FilterByPropertyNames from './FilterByPropertyNames.vue';
    import FilterByInterfaces from './FilterByInterfaces.vue';
    import FilterBySuperTypes from './FilterBySuperTypes.vue';

    export default {
        components: {FilterByInterfaces, FilterByPropertyNames, FilterBySuperTypes},
        computed: mapGetters({
            filterOn: 'isAdvancedFilterOn'
        }),
        methods: {
            showModal() {
                this.$refs.myModalRef.show();
            },
            applyFilter() {
                this.$store.dispatch('applyAdvancedFilter');
                this.$refs.myModalRef.hide();
            }
        },
        mounted() {
            this.$root.$on("bv::modal::hide", () => {
                this.$store.dispatch('resetStagedAdvancedFilter');
            });
        }
    }
</script>

<style module>
    .filter-icon {
        color: #337ab7;
        composes: filter-image from '../../styles/filter-image.css';
    }

    .applied-advanced-filter-icon {
        color: orange;
        composes: filter-image from '../../styles/filter-image.css';
    }
</style>
