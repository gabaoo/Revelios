module.exports = {
  content: [ "./pages/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb", // Blue-600
        secondary: "#10b981", // Emerald-500
        blue: {
          50: "#eff6ff",
          100: "#dbeafe", 
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b", 
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
        green: {
          100: "#dcfce7",
          500: "#22c55e",
          600: "#16a34a",
        },
        yellow: {
          400: "#facc15",
        },
        purple: {
          100: "#f3e8ff",
          400: "#c084fc",
          600: "#9333ea",
        },
        red: {
          600: "#dc2626",
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/line-clamp'),
    require('tailwindcss-animate'),
    require('tailwindcss-elevation'),
    require('tailwindcss-fluid-type'),
  ],
}