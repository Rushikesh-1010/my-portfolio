/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          950: '#070B14',
          900: '#0B1120',
          800: '#0F1729',
          700: '#16213A',
          600: '#1E2A45',
        },
        line: {
          DEFAULT: '#1E293B',
          soft: '#16213A',
        },
        accent: {
          sky: '#38BDF8',
          skydim: '#0EA5E9',
          mint: '#34D399',
          amber: '#FBBF24',
        },
        ink: {
          0: '#F1F5F9',
          1: '#CBD5E1',
          2: '#94A3B8',
          3: '#64748B',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '40px 40px',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0,0,0,0.35)',
        glow: '0 0 0 1px rgba(56,189,248,0.15), 0 0 24px rgba(56,189,248,0.12)',
      },
      animation: {
        'pulse-slow': 'pulse 3.5s cubic-bezier(0.4,0,0.6,1) infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
