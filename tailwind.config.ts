import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1d4ed8',
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        ivory: {
          DEFAULT: '#f9f7f4',
          50: '#fdfcfb',
          100: '#f9f7f4',
          200: '#f0ece6',
          300: '#e5ddd4',
        },
        charcoal: {
          DEFAULT: '#2a2a2a',
          100: '#e8e8e8',
          200: '#c5c5c5',
          300: '#a3a3a3',
          400: '#808080',
          500: '#5e5e5e',
          600: '#3d3d3d',
          700: '#2a2a2a',
          800: '#1a1a1a',
        },
        sage: {
          DEFAULT: '#4d844d',
          50: '#f4f7f4',
          100: '#e3eee3',
          200: '#c5ddc5',
          300: '#96c096',
          400: '#6da06d',
          500: '#4d844d',
          600: '#3a693a',
          700: '#2d532d',
        },
        rose: {
          DEFAULT: '#e11d48',
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        },
      },
      boxShadow: {
        card: '0 1px 4px 0 rgba(0,0,0,0.06), 0 2px 8px 0 rgba(0,0,0,0.04)',
        'card-hover': '0 4px 12px 0 rgba(0,0,0,0.10), 0 2px 6px 0 rgba(0,0,0,0.06)',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Nunito', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config
