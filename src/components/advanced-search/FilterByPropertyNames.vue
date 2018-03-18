<template>
    <div>
        <multi-select
                v-model="chosePropertyNames"
                :multiple="true"
                :options="allPropertyNames"
                :placeholder="'selectPropertyNamesPlaceholder' | format-message">
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
                allPropertyNames: 'getAllPropertyNames',
                selectedPropertyNames: 'getSelectedPropertyNames'
            }),
            chosePropertyNames: {
                get: function () {
                    return this.selectedPropertyNames;
                },
                set: function (event) {
                    this.updateAdvancedSearchPropertyNames(event);
                }
            }
        },
        methods: mapActions([
            'updateAdvancedSearchPropertyNames'
        ])
    }
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>