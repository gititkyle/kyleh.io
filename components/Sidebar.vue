<template>
    <div class="sidebar-container">
        <b-button v-b-toggle.kyleh-sidebar v-b-tooltip.hover title="Open sidebar">
            <b-icon
                icon="chevron-bar-right"
                font-scale="2">
            </b-icon>
        </b-button>
        <b-sidebar
            id="kyleh-sidebar"
            title="say hi!"
            bg-variant=""
            text-variant=""
            sidebar-class="kyleh-custom-sidebar"
            body-class="kyleh-custom-body"
            shadow>
            <b-nav vertical class="w-100">
                <b-nav-item
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://github.com/gititkyle">
                    <font-awesome-icon :icon="['fab', 'github']"/>
                    @gititkyle
                </b-nav-item>
                <b-nav-item
                    rel="noopener noreferrer"
                    target="_blank"
                     href="https://www.linkedin.com/in/kylealanhanson">
                    <font-awesome-icon :icon="['fab', 'linkedin']"/>
                    @kyleh
                </b-nav-item>
                <b-nav-item
                    href="mailto:hi@kyleh.io?subject=Hi, Kyle!">
                    <font-awesome-icon :icon="['fas', 'envelope']"/>
                    @hi
                </b-nav-item>
            </b-nav>
        </b-sidebar>
    </div>
</template>
<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        name: 'Sidebar'
    });
</script>
<style lang="scss">
    .sidebar-container {
        margin: 16px;

        .bi-chevron-bar-right {
            color: $dark-theme-text-light;
        }

        .kyleh-custom-sidebar {
            background-color: $dark-theme-4;
        }

        .nav-link {
            color: $dark-theme-text-dark;
            font-size: $font-size-md;
        }
    }

    @keyframes color {
        from {
            color: $dark-theme-text-light;
        }
        to {
            color: $dark-theme-text-dark;
        }
    }
</style>
