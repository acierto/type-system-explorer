<template>
    <div>
        <multi-select
                v-model="chosenInterfaces"
                :multiple="true"
                :options="allInterfaces"
                :placeholder="'selectInterfacesPlaceholder' | format-message">
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
                allInterfaces: 'getAllInterfaces',
                selectedInterfaces: 'getSelectedInterfaces'
            }),
            chosenInterfaces: {
                get: function() {
                    return this.selectedInterfaces;
                },
                set: function (event) {
                    this.updateAdvancedSearchInterfaces(event);
                }
            }
        },
        methods: mapActions([
            'updateAdvancedSearchInterfaces'
        ])
    }
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>