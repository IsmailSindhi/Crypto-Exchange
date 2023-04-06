/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    fontFamily: {
      verctex: 'Verctex',
      GT_Pressura_Mono_Bold: 'GT-Pressura-Mono-Bold',
      GT_Pressura_Mono_Light: 'GT-Pressura-Mono-Light',
      GT_Pressura_Mono_Regular: 'GT-Pressura-Mono-Regular',
    },
  },
  plugins: [],
}

