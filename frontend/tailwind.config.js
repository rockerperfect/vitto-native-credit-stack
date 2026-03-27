/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        header: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#0A0A0B', // Midnight Obsidian
        accent: '#D32F2F',  // Vitto Cardinal
        surface: '#111116', // Deep Surface
        border: 'rgba(255, 255, 255, 0.05)',
        textPrimary: '#FFFFFF',
        textSecondary: '#A1A1AA'
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%)',
        'red-glow': 'radial-gradient(circle at center, rgba(211, 47, 47, 0.15) 0%, transparent 70%)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    }
  },
  plugins: [],
}
