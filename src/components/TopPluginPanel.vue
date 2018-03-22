<template>
    <div :class="$style['top-plugin-panel']">
        <i class="fa fa-download"
           :class="$style['export-btn']"
           aria-hidden="true"
           :title="exportTitle"
           v-on:click="exportTypes">
        </i>
    </div>
</template>

<script lang="ts">
    import download from 'downloadjs';
    import Vue from 'vue';
    import {formatMessage} from 'vue-ts-locale';
    import {localeMessages} from '../lang/type-system-explorer-lang';
    import {mapGetters} from 'vuex';

    export default Vue.extend({
        computed: {
            ...mapGetters({
                displayedTypes: 'getDisplayedTypes'
            }),
            exportTitle: function (this: any) {
                return formatMessage(localeMessages.exportFilteredTypesTitle);
            }
        },
        methods: {
            exportTypes: function (this: any) {
                download(JSON.stringify(this.displayedTypes), 'xld-types.json', 'application/json');
            }
        }
    });
</script>

<style module>
    .top-plugin-panel {
        background-color: #337ab7;
        border: 1px solid #337ab7;
        height: 40px;
        max-height: 40px;
        min-height: 40px;
        position: absolute;
        width: 100%;
    }

    .export-btn {
        color: white;
        cursor: pointer;
        font-size: 24px;
        padding: 8px;
    }
</style>