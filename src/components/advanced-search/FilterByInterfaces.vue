<template>
    <div>
        <multi-select
                :multiple="true"
                :options="interfaces"
                @input="updateAdvancedSearchInterfaces"
                placeholder="Select interfaces">
        </multi-select>
    </div>
</template>

<script>
    import MultiSelect from 'vue-multiselect';
    import {mapActions, mapGetters} from 'vuex';

    export default {
        components: {MultiSelect},
        computed: mapGetters({
            interfaces: 'getAllInterfaces'
        }),
        methods: mapActions([
            'updateAdvancedSearchInterfaces'
        ])
    }
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>