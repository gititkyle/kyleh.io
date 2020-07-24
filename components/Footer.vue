<template>
    <footer class="footer">
        <div class="container">
            <div class="social-icons">
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/gititkyle"><font-awesome-icon size="md" :icon="['fab', 'github']"/></a>
                <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/kylealanhanson"><font-awesome-icon size="md" :icon="['fab', 'linkedin']"/></a>
                <a rel="noopener noreferrer" target="_blank" href="mailto:hi@kyleh.io?subject=Hi, Kyle!"><font-awesome-icon size="md" :icon="['fas', 'envelope']"/></a>
            </div>
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

    @import "../node_modules/rfs/scss";

    .footer {
        width: 100%;
        padding: 15px;
        position: absolute;
        bottom: 0;
        background-color: $dark-theme-4;
        animation: slide 1s forwards;

        .social-icons, .copyright {
            display: inline;
        }

        .social-icons {
            @include font-size(5rem);

            svg {
                color: $dark-theme-1;
            }
        }
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
