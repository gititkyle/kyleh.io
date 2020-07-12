export default {
    mode: 'spa',
    target: 'server',
    server: {
        port: 8000
    },
    head: {
        title: 'kyleh.io',
        meta: [
            {
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: 'kyleh.io'
            }
        ],
        link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico'
            }
        ]
    },
    css: [
        '@/assets/scss/global.scss',
        '@/assets/scss/lib.scss'
    ],
    styleResources: {
        scss: [
            '~/assets/scss/theme.scss'
        ]
    },
    plugins: [

    ],
    components: true,
    buildModules: [
        '@nuxt/typescript-build',
    ],
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/style-resources',
        ['nuxt-fontawesome', {
                imports: [
                    {
                        set: '@fortawesome/free-solid-svg-icons',
                        icons: ['fas']
                    },
                    {
                        set:'@fortawesome/free-brands-svg-icons',
                        icons: ['fab']
                    }
                ]
            }
        ]
    ],
    axios: {},
    build: {
        analyze: true
    }
}
