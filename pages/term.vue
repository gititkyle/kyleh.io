<template>
    <div class="container">
        <Terminal></Terminal>
    </div>
</template>
<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        layout: 'dark'
    });
</script>
<style lang="scss">
    @import 'terminal.css';

    .container {
        height: 100%;
        display: flex;
        align-items: center;
    }
</style>
