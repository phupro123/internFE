/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
    content: ['./src/**/*.{js,jsx}'],
    theme: {
        extend: {
            fontFamily: {
                'source-sans-pro': ['Source Sans Pro', 'sans-serif'],
            },
            colors: {
                white: '#FFFFFF',
                black: '#303841',
                gray: '#777777',
                yellow: '#F6C90E',
            },
            width: {
                22.5: '5.625rem',
                30: '7.5rem',
            },
            height: {
                22.5: '5.625rem',
                30: '7.5rem',
                66: '16.5rem',
            },
            borderRadius: {
                default: '1.75rem',
            },
            rotate: {
                30: '30deg',
            },
        },
    },
    plugins: [require('tailwindcss'), require('postcss')],
};
