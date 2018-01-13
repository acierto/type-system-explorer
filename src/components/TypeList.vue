<template>
    <div :class="$style['type-column']">
        <div :class="$style['type-row']" v-for="t in allTypes">
            <span :title="t.type">
                {{t.type}}
            </span>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex'

    export default {
        computed: mapState({
            allTypes: state => state.types.all
        }),
        methods: mapActions([
            'getTypes'
        ]),
        created() {
            this.getTypes()
        }
    }
</script>

<style module>

    .type-column {
        overflow: auto;
        width: 220px;
        flex: 1 100%;
    }

    .type-row {
        border: 1px solid #337ab7;
        color: #337ab7;
        font-weight: bold;
        font-size: 12px;
        margin: 5px;
        min-height: 40px;
        overflow: hidden;
        padding: 10px;
        text-decoration: none;
        text-overflow: ellipsis;
        white-space: nowrap;
        background-color: #fff;
    }

    .type-row:hover {
        background-color: #337ab7;
        cursor: pointer;
    }

    .type-row span {
        color: #337ab7;
        font-weight: bold;
    }

    .type-row:hover span {
        color: #fff;
        cursor: pointer;
    }

</style>