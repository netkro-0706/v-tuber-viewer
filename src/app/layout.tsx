import type { Metadata } from 'next'
import './globals.css'
import JotaiProvider from './_provider/JotaiProvider'
import TopNavigation from './components/templates/TopNavigation'

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
        <JotaiProvider>
          <TopNavigation />
          {children}
        </JotaiProvider>
      </body>
    </html>
  )
}
