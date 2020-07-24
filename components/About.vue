<template>
    <div class="about">
        <section class="bio">
            Hi, I'm Kyle. I'm a self-taught fullstack <kbd>Javascript</kbd>
            developer based in
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.openstreetmap.org/search?query=San Jose%2C CA#map=12/37.2971/-121.8174">
                San Jose, Ca.
            </a> I'm currently building stuff @
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://reputation.com">
                reputation.com.</a>
            <span class="cursor">|</span>
        </section>
    </div>
</template>
<style lang="scss" scoped>

    .about {
        @include font-size($font-size-xl);
        color: $dark-theme-text-light;
        animation: 1.5s ease-in fade;
    }

    .cursor {
        animation: 1s blink step-end infinite;
    }

    @include media-breakpoint-down (sm) {
        .about {
            font-size: $font-size-lg;
        }
    }

    @keyframes blink {
        to, from {
            color: transparent;
        }
        50% {
            color: $dark-theme-text-light;
        }
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
