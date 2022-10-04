/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        screens: {
            tablet: '885px',
        },
        extend: {
            fontFamily: {
                latoLight: ['Lato', 'sans-serif'],
                gothamLight: ['Gotham', 'sans-serif'],
            },
        },
    },
    daisyui: {
        themes: [],
    },
    plugins: [require('daisyui')],
};
