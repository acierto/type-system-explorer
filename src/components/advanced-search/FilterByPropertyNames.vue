<template>
    <div>
        <multi-select
                v-model="selected"
                :multiple="true"
                placeholder="Select property names"
                :options="options">
        </multi-select>
    </div>
</template>

<script>
    import MultiSelect from 'vue-multiselect'

    export default {
        components: {MultiSelect},
        data() {
            return {
                selected: null,
                options: ['list', 'of', 'options']
            }
        }
    }
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>