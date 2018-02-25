<template>
    <div>
        <i class="fa fa-filter" :class="$style['filter-icon']" @click="showModal" aria-hidden="true"></i>
        <b-modal ref="myModalRef" hide-footer title="Advanced Search Modal">
            <filter-by-interfaces/>
            <filter-by-property-names/>
            <filter-by-super-types/>
            <b-btn class="mt-3" variant="outline-danger" block @click="applyFilter">Apply</b-btn>
        </b-modal>
    </div>
</template>

<script>
    import FilterByPropertyNames from './FilterByPropertyNames.vue';
    import FilterByInterfaces from './FilterByInterfaces.vue';
    import FilterBySuperTypes from './FilterBysuperTypes.vue';

    export default {
        components: {FilterByInterfaces, FilterByPropertyNames, FilterBySuperTypes},
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
        cursor: pointer;
        font-size: 24px;
        left: 185px;
        position: absolute;
        top: 8px;
    }
</style>