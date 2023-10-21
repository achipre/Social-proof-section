/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'very-dark-magenta': 'hsl(300, 43%, 22%)',
        'soft-pink': 'hsl(333, 80%, 67%)',
        'dark-grayish-magenta': 'hsl(303, 10%, 53%)',
        'light-grayish-magenta': 'hsl(300, 24%, 96%)',
        white: 'hsl(0, 0%, 100%)'
      },
      fontFamily: {
        primary: ['League Spartan', 'sans-serif']
      },
      backgroundImage: {
        topMovil: "url('./assets/bg-pattern-top-mobile.svg')",
        bottomMovil: "url('./assets/bg-pattern-bottom-mobile.svg')",
        bottomDesktop: "url('./assets/bg-pattern-bottom-desktop.svg')",
        topDesktop: "url('./assets/bg-pattern-top-desktop.svg')"
      }
    }
  },
  plugins: []
}

