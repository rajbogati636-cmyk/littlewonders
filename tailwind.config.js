/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {50:'#fffdfb',100:'#fff7f9',200:'#ffdcE1'},
        sky: {50:'#f0f7fd',100:'#C8DEF3',300:'#93ACC3',500:'#6A869F'},
        rose: {50:'#fff7f9',100:'#F8C8D3',200:'#ECC2CD',300:'#E9BAC1',400:'#CC8D9D'},
        sage: {50:'#D4F0ED',100:'#C4ECE0',300:'#A4C5BB'},
        peach: {100:'#FFD3CA',300:'#EBAD9F'},
        lavender: {100:'#F3D7EF',300:'#D3B8CF'},
        gold: {100:'#FFE6AA',300:'#F1CF7C'},
        ink: {500:'#526575',700:'#43515a'},
      },
      fontFamily: {
        serif: ['"Dancing Script"', 'cursive'],
        script: ['"Dancing Script"', 'cursive'],
        sans: ['"Questrial"', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['clamp(2rem, 4.5vw, 3.5rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in-slow': 'fadeIn 1.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gradient-warm': 'linear-gradient(135deg, #fffdfb 0%, #ffdcE1 100%)',
        'gradient-sage': 'linear-gradient(135deg, #D4F0ED 0%, #C4ECE0 100%)',
      },
    },
  },
  plugins: [],
};
