export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'background-primary': '#FDF8F5',
        'background-secondary': '#FFFFFF',
        'background-hover': '#FFF0EB',
        'background-avatar': '#FDF8F5',
        'rose-gold': '#B76E79',
        'rose-gold-light': '#D4A0A7',
        'nude': '#E8D5C8',
        'text-primary': '#3D2C2E',
        'text-secondary': '#8B7072',
        'text-muted': '#B8A0A2',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'gradient-rotate': 'gradientRotate 3s linear infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gradientRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
