'use client'

import { ReactNode } from 'react'
import { HydrationBoundary } from '@tanstack/react-query'

interface Props {
  children: ReactNode
  dehydratedState: unknown
}

const ReactQuerySSRProvieder = ({ children, dehydratedState }: Props) => {
  return (
    <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
  )
}

export default ReactQuerySSRProvieder
