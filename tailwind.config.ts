import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    fontSize: {
      h1: [
        '3.375rem',
        {
          fontWeight: '700',
          lineHeight: '87px',
        },
      ],
      h2: [
        '2.875rem',
        {
          fontWeight: '700',
          lineHeight: '71px',
        },
      ],
      h3: [
        '2.375rem',
        {
          fontWeight: '700',
          lineHeight: '59px',
        },
      ],
      h4: [
        '1.875rem',
        {
          fontWeight: '700',
          lineHeight: '46px',
        },
      ],
      h5: [
        '1.5rem',
        {
          fontWeight: '500',
          lineHeight: '37px',
        },
      ],
      h6: [
        '1.125rem',
        {
          fontWeight: '500',
          lineHeight: '31px',
        },
      ],
      regular10: [
        '0.625rem',
        {
          fontWeight: '200',
          lineHeight: '18px',
        },
      ],
      regular12: [
        '0.75rem',
        {
          fontWeight: '200',
          lineHeight: '19px',
        },
      ],
      medium10: [
        '0.625rem',
        {
          fontWeight: '300',
          lineHeight: '18px',
        },
      ],
      medium12: [
        '0.75rem',
        {
          fontWeight: '300',
          lineHeight: '19px',
        },
      ],
      regular14: [
        '0.875rem',
        {
          fontWeight: '200',
          lineHeight: '22px',
        },
      ],
      medium14: [
        '0.875rem',
        {
          fontWeight: '300',
          lineHeight: '22px',
        },
      ],
      bold14: [
        '0.875rem',
        {
          fontWeight: '500',
          lineHeight: '22px',
        },
      ],
      light16: [
        '1rem',
        {
          fontWeight: '100',
          lineHeight: '25px',
        },
      ],
      regular16: [
        '1rem',
        {
          fontWeight: '200',
          lineHeight: '25px',
        },
      ],
      medium16: [
        '1rem',
        {
          fontWeight: '300',
          lineHeight: '25px',
        },
      ],
      bold16: [
        '1rem',
        {
          fontWeight: '500',
          lineHeight: '25px',
        },
      ],
      light18: [
        '1.125rem',
        {
          fontWeight: '100',
          lineHeight: '28px',
        },
      ],
      regular18: [
        '1.125rem',
        {
          fontWeight: '200',
          lineHeight: '28px',
        },
      ],
      medium18: [
        '1.125rem',
        {
          fontWeight: '300',
          lineHeight: '28px',
        },
      ],
      bold18: [
        '1.125rem',
        {
          fontWeight: '500',
          lineHeight: '28px',
        },
      ],
      light20: [
        '1.25rem',
        {
          fontWeight: '100',
          lineHeight: '31px',
        },
      ],
      regular20: [
        '1.25rem',
        {
          fontWeight: '200',
          lineHeight: '31px',
        },
      ],
      medium20: [
        '1.25rem',
        {
          fontWeight: '300',
          lineHeight: '31px',
        },
      ],
    },
    colors: {
      primary: {
        DEFAULT: '#042d98',
        light: '#3b7ff6',
        dark: '#001b62',
      },
      secondary: {
        DEFAULT: '#fff500',
        'pastel-light': 'rgba(255,245,0,.4)',
        'pastel-dark':'rgba(255,245,0,.2)'
      },
      background: {
        light: '#FFFFFF',
        middle: '#f7f7f7',
        dark: '#edf0f6',
      },
      text: {
        light: '#1D9D9C',
        middle: '#4D637B',
        dark: '#1F2833',
        white: '#FFFFFF',
      },
      border: {
        light: '#0000000d',
        middle: '#0000001a',
        dark: '#00000033',
      },
      disabled: {
        text: '#A6A6A6',
        background: '#F2F2F2',
        surface: '#CCCCCC',
      },
      error: {
        DEFAULT: '#DF5454',
        light: '#FBE5E5',
        dark: '#8d2727',
      },
    },
    extend: {
      boxShadow: {
        'card-md': '0px 2px 16px 0px #00000012',
        'card-lg': '0px 4px 16px 0px #0000001a',
      },
    },
  },

  plugins: [],
}
export default config
