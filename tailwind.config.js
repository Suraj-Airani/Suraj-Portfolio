/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#0e0918',
        surface: '#1a1624',
        panel: '#1b1728',
        shell: '#2c2834',
        smoke: '#3e3a46',
        ash: '#d1cece',
        fog: '#9d9797',
        silver: '#e5e7eb',
        cloud: '#ffffff',
        steel: '#48556a',
        ember: '#fd8925',
        current: '#077ac7',
        scorch: '#ff492c',
        crimson: '#56312d',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
      },
      fontSize: {
        caption: ['12px', '1.5'],
        'body-sm': ['14px', '1.5'],
        body: ['16px', { lineHeight: '1.5', letterSpacing: '-0.29px' }],
        subheading: ['18px', '1.4'],
        'heading-sm': ['20px', '1.25'],
        heading: ['24px', { lineHeight: '1.2', letterSpacing: '-0.17px' }],
        'heading-lg': ['48px', { lineHeight: '0.94', letterSpacing: '-0.86px' }],
        display: ['54px', { lineHeight: '0.88', letterSpacing: '-1.08px' }],
      },
      backgroundImage: {
        'ember-cta': 'linear-gradient(30deg, rgb(253,137,37), rgb(255,12,0))',
        'electric-current': 'linear-gradient(141deg, rgb(7,122,199), rgb(107,33,239))',
      },
      boxShadow: {
        'glow-inset': 'rgba(255,255,255,0.1) 0px 0px 0px 1px inset, rgba(255,142,93,0.3) 0px 1px 0px 0px inset',
        frost: 'rgba(0,0,0,0.26) 0px 0px 8px 0px',
      },
      maxWidth: {
        page: '1200px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'line-up': {
          from: { transform: 'translateY(115%)' },
          to: { transform: 'translateY(0)' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.35' },
        },
      },
      animation: {
        marquee: 'marquee 48s linear infinite',
        'line-up': 'line-up 1s cubic-bezier(0.22,1,0.36,1) both',
        'spin-slow': 'spin-slow 24s linear infinite',
        'pulse-dot': 'pulse-dot 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
