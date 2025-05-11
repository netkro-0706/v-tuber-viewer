import type { Metadata } from 'next'
import './globals.css'
import JotaiProvider from './providers/JotaiProvider'
import TopNavigation from './components/templates/TopNavigation'
import ReactQueryProvider from './providers/ReactQueryProvider'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export const metadata: Metadata = {
  title: 'Nextjs15',
  description: 'Study Nextj15 App',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <JotaiProvider>
            <TopNavigation />
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
          </JotaiProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
