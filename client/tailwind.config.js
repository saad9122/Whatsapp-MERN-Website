/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-gray' : '#e9edef',
        'custom-green' : "#c5e6c1",
        'custom-white' : 'hsla(0,0%,100%,0.6)',
        'custom-green2' : "#00a884",
            }
    },
  },
  plugins: [],
}

