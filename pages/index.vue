<template>
    <div class="container">
        <Header></Header>
        <div class="inner-container">
            <About></About>
        </div>
        <Footer></Footer>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        layout: 'dark'
    });
</script>

<style lang="scss" scoped>
    .container {
        display: flex;
        height: 100%;

        .inner-container {
            margin: 0 auto;
            justify-content: center;
            align-content: center;
            align-items: center;
            display: flex;
        }
    }
</style>
