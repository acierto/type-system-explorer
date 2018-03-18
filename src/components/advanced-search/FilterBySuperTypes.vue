<template>
    <div>
        <multi-select
                v-model="chosenSuperTypes"
                :multiple="true"
                :options="allSuperTypes"
                :placeholder="'selectSuperTypesPlaceholder' | format-message">
        </multi-select>
    </div>
</template>

<script>
    import MultiSelect from 'vue-multiselect';
    import {mapActions, mapGetters} from 'vuex';

    export default {
        components: {MultiSelect},
        computed: {
            ...mapGetters({
                allSuperTypes: 'getAllSuperTypes',
                selectedSuperTypes: 'getSelectedSuperTypes'
            }),
            chosenSuperTypes: {
                get: function () {
                    return this.selectedSuperTypes;
                },
                set: function (event) {
                    this.updateAdvancedSearchSuperTypes(event);
                }
            }
        },
        methods: mapActions([
            'updateAdvancedSearchSuperTypes'
        ])
    }
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>