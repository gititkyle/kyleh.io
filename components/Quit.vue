<template>
    <div class="terminal-alert terminal-alert-primary">
        Thanks for trying out the cli! I'll redirect you to the main page in 5s
    </div>
</template>
<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        name: 'Quit',
        created () {
            setTimeout(() => {
                document.location.href = '/';
            }, 5000);
        }
    });
</script>
