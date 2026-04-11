import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-dark': 'var(--color-primary-dark)',
        'primary-light': 'var(--color-primary-light)',
        glow: 'var(--color-glow)',
        'bg-dark': 'var(--color-bg-dark)',
        'bg-card': 'var(--color-bg-card)',
        'bg-elevated': 'var(--color-bg-elevated)',
        border: 'var(--color-border)',
        'text-primary': 'var(--color-text-primary)',
        'text-muted': 'var(--color-text-muted)',
        'accent-gold': 'var(--color-accent-gold)'
      },
      fontFamily: {
        display: ['var(--font-syne)', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace']
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 rgba(255, 77, 102, 0.0)' },
          '50%': { boxShadow: '0 0 24px rgba(255, 77, 102, 0.45)' }
        },
        meshShift: {
          '0%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '50%': { transform: 'translate3d(2%, -2%, 0) scale(1.05)' },
          '100%': { transform: 'translate3d(0, 0, 0) scale(1)' }
        }
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
        pulseGlow: 'pulseGlow 2.4s ease-in-out infinite',
        meshShift: 'meshShift 10s ease-in-out infinite'
      }
    }
  },
  plugins: []
};

export default config;
