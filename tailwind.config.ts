import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── PRIMARY: Ewolyn Green (from logo checkmark)
        primary: {
          DEFAULT: '#2eb85c',   // vibrant leaf green
          light: '#4cd17a',
          dark: '#1e9647',
          subtle: '#f0fdf4',   // near-white green tint
          muted: '#d1fae5',
        },
        // ── SECONDARY: Ewolyn Navy (from logo letters)
        secondary: {
          DEFAULT: '#1B4F8C',
          light: '#2672cf',
          dark: '#0d2f57',
          subtle: '#eff6ff',
        },
        // ── NEUTRAL SURFACE
        surface: {
          DEFAULT: '#ffffff',
          muted: '#f8fafc',
          card: '#f0fdf4',   // green-tinted card bg
          border: '#e2f5ea',
        },
        // ── ACCENT / EMOTIONS
        accent: {
          green: '#2eb85c',
          'green-light': '#4cd17a',
          'green-dark': '#1e9647',
          orange: '#f47c20',
          teal: '#0d9488',
          blue: '#1B4F8C',
        },
        // ── TEXT
        ink: '#0f1f10',   // very dark green-black
        muted: '#5a7060',   // muted green-grey

        // ── LEGACY aliases (keep to not break old code)
        brand: {
          DEFAULT: '#1B4F8C',
          dark: '#0f172a',
          light: '#2563A3',
          navy: '#1B4F8C',
          secondary: '#f0fdf4',
        },
        'brand-navy': '#1B4F8C',
        'accent-green': '#2eb85c',
        'accent-green-dark': '#1e9647',
        cyan: {
          DEFAULT: '#0BA5D8',
          dark: '#0891B2',
          light: '#22D3EE',
          bright: '#0BA5D8',
        },
        evolyn: {
          blue: '#1B4F8C',
          teal: '#2eb85c',
          cyan: '#0BA5D8',
          green: '#2eb85c',
          charcoal: '#334155',
        },
        dark: {
          DEFAULT: '#1e293b',
          deep: '#0f172a',
          card: '#334155',
        },
      },

      // ── SHADOWS
      boxShadow: {
        soft: '0 10px 30px rgba(2, 6, 23, 0.06)',
        'soft-green': '0 10px 30px rgba(46, 184, 92, 0.12)',
        glow: '0 0 24px rgba(46, 184, 92, 0.35)',
        'glow-lg': '0 0 40px rgba(46, 184, 92, 0.45)',
        'brand-glow': '0 0 20px rgba(27, 79, 140, 0.30)',
        'green-glow': '0 0 24px rgba(46, 184, 92, 0.40)',
        'cyan-glow': '0 0 20px rgba(11, 165, 216, 0.35)',
        card: '0 4px 24px rgba(46, 184, 92, 0.08)',
        'card-hover': '0 12px 40px rgba(46, 184, 92, 0.18)',
      },

      // ── GRADIENTS
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-brand': 'linear-gradient(135deg, #1B4F8C 0%, #2eb85c 100%)',
        'gradient-green': 'linear-gradient(135deg, #2eb85c 0%, #4cd17a 100%)',
        'gradient-hero': 'linear-gradient(135deg, #0d2f57 0%, #1B4F8C 50%, #2eb85c 100%)',
        'gradient-section': 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0d2f57 0%, #1B4F8C 100%)',
        'gradient-glow': 'radial-gradient(ellipse at top, rgba(46,184,92,0.15) 0%, transparent 60%)',
      },

      // ── FONT FAMILIES
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },

      // ── BORDER RADIUS
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },

      // ── ANIMATIONS
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.5s ease-out',
        'slide-in': 'slideIn 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'pulse-green': 'pulseGreen 2.5s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'float': 'float 4s ease-in-out infinite',
        'float-slow': 'float 7s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-subtle': 'bounceSub 2s ease-in-out infinite',
        'scroll-rtl': 'scrollRtl 20s linear infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        'grow-width': 'growWidth 1.2s ease-out forwards',
        'counter': 'counter 2s ease-out',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 16px rgba(46, 184, 92, 0.25)' },
          '50%': { boxShadow: '0 0 32px rgba(46, 184, 92, 0.55)' },
        },
        pulseGreen: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.04)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        bounceSub: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        scrollRtl: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        growWidth: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
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
