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
    },
  },
  plugins: [scrollbar, scrollbarHide],
} satisfies Config
