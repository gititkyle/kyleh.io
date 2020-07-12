<template>
    <div class="about">
        <span class="bio">
            Hi, I'm Kyle. I am a fullstack Javascript developer based in San Jose, Ca.
        </span>
    </div>
</template>
<style lang="scss" scoped>
    .about {
        width: 10em;
        font-size: $font-size-xlarge;
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
