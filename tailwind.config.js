/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        'cyber-blue': '#00f6ff',
        'cyber-purple': '#7000ff',
        'cyber-pink': '#ff00f6',
        'cyber-magenta': '#b829dd',
        'dark-bg': '#0a0a0a',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 10px #00f6ff, 0 0 20px #00f6ff' },
          '100%': { textShadow: '0 0 20px #b829dd, 0 0 30px #b829dd' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 246, 255, 0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(0, 246, 255, 0.4)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}