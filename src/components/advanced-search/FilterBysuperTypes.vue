<template>
    <div>
        <multi-select
                :multiple="true"
                :options="superTypes"
                @input="updateAdvancedSearchSuperTypes"
                placeholder="Select superTypes">
        </multi-select>
    </div>
</template>

<script>
    import MultiSelect from 'vue-multiselect';
    import {mapActions, mapGetters} from 'vuex';

    export default {
        components: {MultiSelect},
        computed: mapGetters({
            superTypes: 'getAllSuperTypes'
        }),
        methods: mapActions([
            'updateAdvancedSearchSuperTypes'
        ])
    }
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>