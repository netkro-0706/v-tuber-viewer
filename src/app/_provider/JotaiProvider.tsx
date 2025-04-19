"use client"

import { Provider } from "jotai"
import React from "react"
import { HasChildren } from "../util/interface"

export default function JotaiProvider({ children }: HasChildren) {
  return <Provider>{children}</Provider>
}
