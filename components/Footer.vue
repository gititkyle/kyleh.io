<template>
    <div class="footer">
        <div class="social-icons">
            <a href="https://www.linkedin.com/in/kylealanhanson"><font-awesome-icon size="lg" :icon="['fab', 'linkedin']"/></a>
            <a href="https://github.com/chooooons"><font-awesome-icon size="lg" :icon="['fab', 'github']"/></a>
            <a href="mailto:hi@kyleh.io?subject=Hi, Kyle!"><font-awesome-icon size="lg" :icon="['fas', 'envelope']"/></a>
        </div>
    </div>
</template>
<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        name: 'Footer'
    });
</script>
<style lang="scss" scoped>
    .footer {
        display: flex;
        position: absolute;
        width: 100%;
        padding: 15px;
        background-color: $dark-theme-4;
        animation: slide 1s forwards;
        justify-content: center;

        .social-icons {
            width: 32em;

            svg {
                color: $dark-theme-1;
            }
        }
    }

    @keyframes slide {
        0% {
            opacity: 0;
            bottom: -50px;
        }
        100% {
            opacity: 1;
            bottom: 0;
        }
    }
</style>
