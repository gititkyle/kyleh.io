<template>
    <div class="terminal-timeline">
        <div
            class="terminal-card"
            v-for="card in cards"
            :key="card.key">
            <header>{{card.title}}</header>
            <div>{{card.body}}</div>
        </div>
    </div>
</template>
<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        name: 'Timeline',
        props: {
            cards: Array
        }
    });
</script>
<style lang="scss" scoped>
    .terminal-timeline .terminal-card::before {
        left: 28px;
    }
</style>
