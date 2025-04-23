import type { Metadata } from 'next'
import './globals.css'
import JotaiProvider from './_provider/JotaiProvider'
import TopNavigation from './components/templates/topNavigation'
import ReactQueryProvider from './_provider/ReactQueryProvider'

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
          </JotaiProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
