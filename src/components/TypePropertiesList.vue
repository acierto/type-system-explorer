<template>
    <div :class="$style['type-column']">
        <div :class="$style['type-column-title']">Type Properties</div>

    </div>
</template>

<style module>
    .type-column {
        display: flex;
        flex-flow: column;
        height: inherit;
        width: 220px;
    }

    .type-column-title {
        display: inline-block;
        font-weight: bold;
        line-height: 30px;
        text-align: center;
        width: auto;
    }
</style>