/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#F3743D',
        gray: '#939393',
        black: '#2C2C2C'
      }
    }
  },
  plugins: []
}
