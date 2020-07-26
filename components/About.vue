<template>
    <div class="about">
        <section class="bio">
            <div>{{typing}} <span class="cursor">|</span></div>
        </section>
    </div>
</template>
<script lang="ts">
    import Vue from 'vue';

    const bio = 'Hi, I\'m Kyle. I\'m a self-taught fullstack Javascript' +
        ' developer based in San Jose, Ca. I\'m currently building stuff @ reputation.com.';

    export default Vue.extend({
        name: 'About',
        data: () => {
            return {
                typing: ``
            };
        },
        created () {
            const that = this;
            let char = 0;

            (function type () {
                if(bio[char]) {
                    that.typing += bio[char]; char++;
                    setTimeout(type, Math.floor(Math.random() * 70 + 15));
                }
            })();
        }
    });
</script>
<style lang="scss" scoped>

    .about {
        @include font-size($font-size-xl);
        color: $dark-theme-text-light;
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
</style>
