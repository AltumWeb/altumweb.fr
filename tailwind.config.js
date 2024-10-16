const animate = require("tailwindcss-animate")

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    prefix: "",
    purge: [
        './pages/**/*.vue',
        './components/**/*.vue',
        './layouts/**/*.vue',
        './plugins/**/*.js',
        './nuxt.config.js',
        './app.vue'
    ],

    theme: {
        extend: {
            colors: {
                'light-text': '#040316',
                'light-background': '#fbfbfe',
                'light-primary': '#284b8a',
                'light-secondary': '#dddbff',
                'light-accent': '#f9aef1',

                'dark-text': '#eae9fc',
                'dark-background': '#010104',
                'dark-primary': '#7597d7',
                'dark-secondary': '#353179',
                'dark-accent': '#510649',
            },
            fontFamily: {
                heading: 'Roboto',
                body: 'Roboto',
            },
        }
    },
    plugins: [animate],
}