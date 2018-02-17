<template>
    <div>
        <i class="fa fa-filter" :class="$style['filter-icon']" @click="showModal" aria-hidden="true"></i>
        <b-modal ref="myModalRef" hide-footer title="Advanced Search Modal">
            <filter-by-property-names/>
            <b-btn class="mt-3" variant="outline-danger" block @click="hideModal">Apply</b-btn>
        </b-modal>
    </div>
</template>

<script>
    import FilterByPropertyNames from './FilterByPropertyNames.vue';
    export default {
        components: {FilterByPropertyNames},
        methods: {
            showModal () {
                this.$refs.myModalRef.show()
            },
            hideModal () {
                this.$refs.myModalRef.hide()
            }
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