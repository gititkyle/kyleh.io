<template>
    <div class="terminal-card">
        <header>Links</header>
        <div>
            <a
                rel="noopener noreferrer nofollow"
                target="_blank"
                href="https://github.com/gititkyle">
                <font-awesome-icon :icon="['fab', 'github']"/>&nbsp;@gititkyle
            </a>
            <br/>
            <a
                rel="noopener noreferrer nofollow"
                target="_blank"
                href="https://www.linkedin.com/in/kylealanhanson">
                <font-awesome-icon :icon="['fab', 'linkedin']"/>&nbsp;@kyleh
            </a>
            <br/>
            <a
            href="mailto:hi@kyleh.io?subject=Hi, Kyle!">
                <font-awesome-icon :icon="['fas', 'envelope']"/>&nbsp;@hi
            </a>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .links {
        margin: 16px 0;
    }
</style>
