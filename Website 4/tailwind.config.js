/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8f5f3',
          100: '#f0ebe7',
          200: '#e3d7cf',
          300: '#d0b9aa',
          400: '#ba9680',
          500: '#A46B45', // Primary color (Copper Gold)
          600: '#95613f',
          700: '#7d5235',
          800: '#684430',
          900: '#573a2a',
        },
        secondary: {
          50: '#f9f5f2',
          100: '#f3ebe5',
          200: '#e7d7cb',
          300: '#D79F83', // Secondary color (Metallic Rose)
          400: '#ca8764',
          500: '#bf724b',
          600: '#ae5e38',
          700: '#90492e',
          800: '#773e2b',
          900: '#633627',
        },
        accent: {
          50: '#f7f4f2',
          100: '#e9e1dd',
          200: '#d7c7bf',
          300: '#bea69a',
          400: '#a48676',
          500: '#8e6e60',
          600: '#5C3D2E', // Accent color (Warm Brown)
          700: '#52362a',
          800: '#452f26',
          900: '#3d2a23',
        },
        light: '#F6F0EA',  // Soft Cream
        dark: '#1E1E1E',   // Charcoal Black
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
