'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HasChildren } from '../util/interface'
import { useState } from 'react'

export default function ReactQueryProvider({ children }: HasChildren) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
