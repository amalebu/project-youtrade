module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        extend: {
            width: {
                '112': '32rem',
                '128': '36rem',
                '256': '50rem',
            },
            height: {
                '128': '36rem',
            }
        },
        fontFamily: {
            Roboto: ['Roboto, sans-serif'],
            Lora: ['Lora, serif'],
        },
        container: {
            center: true,
            padding: "1em",
            screens: {
                lg: "1324px",
                xl: "1324px",
                "2xl": "1324px",
            }
        },

    },
    plugins: [
        require('tailwindcss-debug-screens'),
    ],
}