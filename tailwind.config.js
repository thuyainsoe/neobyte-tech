/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neobyte: {
          navy: 'var(--color-navy)',
          teal: 'var(--color-teal)',
          light: 'var(--color-light)',
          gray: 'var(--color-gray)',
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          muted: 'var(--color-text-muted)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'dot-pattern': 'radial-gradient(var(--color-gray) 1px, transparent 1px)',
      }
    }
  },
  plugins: [],
};
