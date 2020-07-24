<template>
    <div class="container-fullwidth">
        <Header></Header>
        <Sidebar></Sidebar>
        <div class="container">
            <About></About>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {
        SidebarPlugin,
        NavPlugin,
        BootstrapVueIcons
    } from 'bootstrap-vue';

    Vue.use(SidebarPlugin);
    Vue.use(NavPlugin);
    Vue.use(BootstrapVueIcons);

    export default Vue.extend({
        layout: 'dark'
    });
</script>
<style lang="scss" scoped>
    .container {
        display: flex;
        height: 85vh;
        align-items: center;
    }
</style>
