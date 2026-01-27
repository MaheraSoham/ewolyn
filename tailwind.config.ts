import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#1B4F8C', // Navy blue from Ewolyn logo
          dark: '#0f172a',
          light: '#2563A3',
          navy: '#1B4F8C',
        },
        crimson: {
          DEFAULT: '#c11e2f', // Crimson red from Enego
          dark: '#a01828',
          light: '#d63447',
        },
        cyan: {
          DEFAULT: '#0BA5D8',
          dark: '#0891B2',
          light: '#22D3EE',
          bright: '#0BA5D8',
        },
        ink: '#0f172a',
        muted: '#64748b',
        dark: {
          DEFAULT: '#1e293b',
          deep: '#0f172a',
          card: '#334155',
        },
        accent: {
          green: '#4CAF50',
          'green-dark': '#388E3C',
          teal: '#0BA5D8',
          cyan: '#0BA5D8',
        },
        evolyn: {
          blue: '#1B4F8C',
          teal: '#0BA5D8',
          cyan: '#0BA5D8',
          green: '#4CAF50',
          charcoal: '#334155',
        },
      },
      boxShadow: {
        soft: '0 10px 30px rgba(2, 6, 23, 0.08)',
        glow: '0 0 20px rgba(11, 165, 216, 0.3)',
        'glow-lg': '0 0 30px rgba(11, 165, 216, 0.4)',
        'brand-glow': '0 0 20px rgba(27, 79, 140, 0.3)',
        'cyan-glow': '0 0 20px rgba(11, 165, 216, 0.4)',
        'green-glow': '0 0 20px rgba(76, 175, 80, 0.4)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-brand': 'linear-gradient(135deg, #1B4F8C 0%, #0BA5D8 100%)',
        'gradient-cyan': 'linear-gradient(135deg, #0BA5D8 0%, #22D3EE 100%)',
        'gradient-green': 'linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%)',
        'gradient-hero': 'linear-gradient(135deg, #1B4F8C 0%, #0BA5D8 50%, #4CAF50 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in': 'slideIn 0.6s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'gradient-shift': 'gradientShift 3s ease infinite',
        'float': 'float 3s ease-in-out infinite',
        'counter': 'counter 2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(11, 165, 216, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(11, 165, 216, 0.6)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        counter: {
          '0%': { opacity: '0', transform: 'scale(0.5)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
