'use client'

import { Provider } from 'jotai'
import React from 'react'
import { HasChildren } from '../utils/interface'

export default function JotaiProvider({ children }: HasChildren) {
  return <Provider>{children}</Provider>
}
