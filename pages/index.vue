<template>
    <div class="container-fullwidth">
        <Header></Header>
        <div class="container">
            <About></About>
        </div>
        <Footer></Footer>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { BootstrapVue } from 'bootstrap-vue';

    Vue.use(BootstrapVue);

    export default Vue.extend({
        layout: 'dark'
    });
</script>

<style lang="scss" scoped>
    .container {
        display: flex;
        height: 100vh;
        align-items: center;
    }
</style>
