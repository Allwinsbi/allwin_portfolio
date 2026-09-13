/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FFFFFF',
        surface: '#F8FAFC',
        'surface-soft': '#EEF2F7',
        ink: '#0F172A',
        'ink-soft': '#475569',
        line: '#E2E8F0',
        // Brand accent — deep indigo, used for headings highlights, links, nav underline.
        accent: '#4F46E5',
        'accent-deep': '#4338CA',
        // Call-to-action — vivid orange, reserved for primary buttons so they pop against indigo/white.
        cta: '#F97316',
        'cta-deep': '#EA580C',
        // Hero section — rich indigo-to-violet gradient ground, fills the old empty entrance.
        hero: '#1E1B4B',
        'hero-deep': '#0F0D2B',
        'hero-glow': '#312E81',
        live: '#16A34A',
        coming: '#64748B',
        vilzoo: '#2563EB',
        aeronero: '#0891B2',
        thangam: '#D97706',
        chill: '#DB2777',
        synzoo: '#16A34A',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1160px',
      },
    },
  },
  plugins: [],
}
