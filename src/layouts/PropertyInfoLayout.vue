<template>
    <div :class="$style['property-info-layout']" v-if="isTemplateDisplayed()">
        <property-details></property-details>
    </div>
</template>

<script>
    import Vue from 'vue';
    import PropertyDetails from '../components/PropertyDetails.vue';
    import {mapGetters} from 'vuex';

    export default Vue.extend({
        components: {PropertyDetails},
        computed: mapGetters({
            hasSelectedType: 'hasSelectedType',
            hasSelectedProperty: 'hasSelectedProperty'
        }),
        methods: {
            isTemplateDisplayed: function () {
                return this.hasSelectedType && this.hasSelectedProperty;
            }
        }
    });
</script>

<style module>
    .property-info-layout {
        display: flex;
        flex-basis: auto;
        flex-flow: column nowrap;
        flex-grow: 1;
        width: auto;
    }

</style>