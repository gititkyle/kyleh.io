<template>
    <div class="about">
        <span class="bio">
            Hi, I'm Kyle. I am a fullstack <kbd>Javascript</kbd> developer based in <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/San+Jose,+CA/">San Jose, Ca</a>.
        </span>
    </div>
</template>
<style lang="scss" scoped>

    @import "../node_modules/rfs/scss";

    .about {
        @include font-size(4rem);
        color: $dark-theme-text-light;
        animation: 2s ease-in fade;
    }

    @keyframes fade {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
</style>
