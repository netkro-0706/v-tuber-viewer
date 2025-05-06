import type { Config } from 'tailwindcss'
import scrollbar from 'tailwind-scrollbar'
import scrollbarHide from 'tailwind-scrollbar-hide'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-40%)' },
        },
      },
      animation: {
        marquee: 'marquee 10s linear infinite',
      },
    },
  },
  plugins: [scrollbar, scrollbarHide],
} satisfies Config
