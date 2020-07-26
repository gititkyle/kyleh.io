<template>
    <footer class="footer">
        <div class="container">
            <section>
                <code>prefer cli? try <a href="/term">this</a> (not recommended for mobile)</code>
            </section>
        </div>
    </footer>
</template>
<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        name: 'Footer'
    });
</script>
<style lang="scss" scoped>

    .footer {
        width: 100%;
        padding: 15px;
        position: absolute;
        bottom: 0;
        animation: slide 1.5s forwards;
    }

    @keyframes slide {
        0% {
            opacity: 0;
            bottom: -20px;
        }
        100% {
            opacity: 1;
            bottom: 0
        }
    }
</style>
