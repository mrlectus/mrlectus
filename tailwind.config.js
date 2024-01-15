/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'photo': "url('/id.jpg')"
      },
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'mulish': ['Mulish', 'sans-serif'],
    }
  },
  plugins: [],
}
