import tailwindScrollbar from 'tailwind-scrollbar';
import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem', // 24px
        sm: '2rem',
        lg: '3rem',
      },
      screens: {
        '2xl': '1440px',
      },
    },
    extend: {
      fontFamily: {
        sans: [
          'SF Pro Display',
          'var(--font-geist-sans)',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      borderRadius: {
        '4xl': '2rem', // 32px
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        scroll: 'scroll 60s linear infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      colors: {
        // Text colors - Using CSS variables
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          tertiary: 'var(--text-tertiary)',
          inverse: 'var(--text-inverse)',
          focus: 'var(--text-focus)',
        },
        // Layer/Background colors
        layer: {
          1: 'var(--layer-1)',
          2: 'var(--layer-2)',
          3: 'var(--layer-3)',
          focus: 'var(--layer-focus)',
        },
        // Icon colors
        icon: {
          primary: 'var(--icon-primary)',
          secondary: 'var(--icon-secondary)',
          tertiary: 'var(--icon-tertiary)',
          inverse: 'var(--icon-inverse)',
        },
        // Border colors
        border: {
          default: 'var(--border-default)',
        },
        // Button colors
        button: {
          primary: 'var(--button-primary)',
        },
        // Semantic colors
        success: 'var(--success)',
        error: 'var(--error)',
        warning: 'var(--warning)',
        // Additional colors
        green: {
          500: 'var(--green-500)',
        },
        neural: {
          800: 'var(--neural-800)',
        },
        // Legacy
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [tailwindScrollbar({ nocompatible: true }), tailwindcssAnimate],
};

export default config;
