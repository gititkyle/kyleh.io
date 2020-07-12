<template>
    <div class="header">
        <div></div>
    </div>
</template>
<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        name: 'Header'
    });
</script>
<style lang="scss" scoped>
    .header {
        display: flex;
        position: absolute;
        width: 100%;
        border-bottom: 5px solid $dark-theme-4;
        animation: slide 1s ease-in;
    }

    @keyframes slide {
        0% {
            top: -10px;
        }
        100% {
            top: 0
        }
    }
</style>
