/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#12181F',
        'ink-soft': '#3A4450',
        paper: '#FAFAF8',
        'paper-dim': '#F1EFE9',
        line: '#DEDAD1',
        gold: '#B9812F',
        'gold-deep': '#8F6421',
        live: '#2F6F5E',
        coming: '#8A8578',
        red: '#E8362B',
        'red-deep': '#B8241C',
      },
      fontFamily: {
        display: ['Anton', '"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1160px',
      },
    },
  },
  plugins: [],
}
