/** @type {import('tailwindcss').Config} */
export default {         // instead of module.exports {}
   prefix: 'tw-',        // Prefix of your choice between tw- or tailwind- etc, etc... it doesn't matter
   //darkMode: 'class',  // of your choice
  content: [
    "./src/**/*.ts",
    "./**/*.html",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}