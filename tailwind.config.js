/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: '#121212',
        card: 'rgba(26, 26, 26, 0.72)',
        cardSolid: '#1a1a1a',
        border: 'rgba(255,255,255,0.08)',
        accent: '#FFC107'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,193,7,0.25), 0 12px 40px rgba(0,0,0,0.65)'
      },
      backgroundImage: {
        'hero-overlay':
          'radial-gradient(1200px circle at 20% 10%, rgba(255,193,7,0.10), transparent 55%), linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.65) 55%, rgba(0,0,0,0.92))'
      }
    }
  },
  plugins: []
};
