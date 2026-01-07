/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-gold': {
                    DEFAULT: 'rgba(201, 167, 95, 1)',
                    50: 'rgba(201, 167, 95, 0.1)',
                    100: 'rgba(201, 167, 95, 0.2)',
                    200: 'rgba(201, 167, 95, 0.3)',
                    300: 'rgba(201, 167, 95, 0.4)',
                    400: 'rgba(201, 167, 95, 0.5)',
                    500: 'rgba(201, 167, 95, 1)',
                    600: 'rgba(181, 147, 75, 1)',
                    700: 'rgba(161, 127, 55, 1)',
                    800: 'rgba(141, 107, 35, 1)',
                    900: 'rgba(121, 87, 15, 1)',
                },
                'brand-charcoal': {
                    DEFAULT: 'rgba(68, 66, 67, 1)',
                    50: 'rgba(68, 66, 67, 0.1)',
                    100: 'rgba(68, 66, 67, 0.2)',
                    200: 'rgba(68, 66, 67, 0.3)',
                    300: 'rgba(68, 66, 67, 0.4)',
                    400: 'rgba(68, 66, 67, 0.5)',
                    500: 'rgba(68, 66, 67, 1)',
                    600: 'rgba(58, 56, 57, 1)',
                    700: 'rgba(48, 46, 47, 1)',
                    800: 'rgba(38, 36, 37, 1)',
                    900: 'rgba(28, 26, 27, 1)',
                },
            },
            animation: {
                'skew-scroll': 'skew-scroll 20s linear infinite',
            },
            keyframes: {
                'skew-scroll': {
                    '0%': {
                        transform:
                            'rotatex(20deg) rotateZ(-20deg) skewX(20deg) translateZ(0) translateY(0)',
                    },
                    '100%': {
                        transform:
                            'rotatex(20deg) rotateZ(-20deg) skewX(20deg) translateZ(0) translateY(-100%)',
                    },
                },
            },
        },
    },
    plugins: [],
};
