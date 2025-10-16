/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        hap: {50:'#f0f8ff',100:'#dff0ff',200:'#bfe1ff',300:'#9fd3ff',400:'#7fc4ff',500:'#5fb6ff',600:'#3699f0',700:'#1f7bd1',800:'#165ea1',900:'#123f6a'}
      },
      boxShadow:{ glow:'0 0 0 6px rgba(95,182,255,0.15)'},
      borderRadius: { '2xl':'1rem' }
    },
  },
  plugins: [],
};
