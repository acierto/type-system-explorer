<template>
    <div>
        <multi-select
                :multiple="true"
                :options="superTypes"
                @input="updateAdvancedSearchPropertyNames"
                :placeholder="'selectPropertyNamesPlaceholder' | format-message">
        </multi-select>
    </div>
</template>

<script>
    import MultiSelect from 'vue-multiselect';
    import {mapActions, mapGetters} from 'vuex';

    export default {
        components: {MultiSelect},
        computed: mapGetters({
            superTypes: 'getAllPropertyNames'
        }),
        methods: mapActions([
            'updateAdvancedSearchPropertyNames'
        ])
    }
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>