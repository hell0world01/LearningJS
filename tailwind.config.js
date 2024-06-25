/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark: 'var(--dark)',
        darker: 'var(--darker)',
        darkest: 'var(--darkest)',
        gray: 'var(--gray)',
        light: 'var(--light)',
        pink: 'var(--pink)',
        purple: 'var(--purple)',
      },
    },
  },
  plugins: [],
}