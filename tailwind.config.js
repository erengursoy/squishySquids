module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    theme: {

        extend: {
            boxShadow: {

                'mint': '0px 0px 10px 0px rgb(0 0 0 / 50%);',
                'shadow-3xl': '0px 0px 10px 0px rgb(0 0 0 / 50%);',

            },
            spacing: {
                '128': '32rem',
                '18': '4.5rem'
            },
            colors: {
                'header': '#2081E2',
                'content': '#185b90',
                'title': '#2081e2',
                'jonB': 'rgb(255 193 176)',
                'SquidNick': '#adfb90',
                'damian': '#ff93d1',
                'WhaleGoddess': '#ffe567',
            },
            borderRadius: {
                '4xl': '30px;',
            }



        },
    },
    plugins: [],
}