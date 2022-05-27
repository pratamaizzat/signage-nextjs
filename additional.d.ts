import "next"
import type { NextPage } from "next"
import React from 'react'

declare module 'next' {
  export type NextLayout<P = {}> = NextPage<P> & {
    getLayout?: (page: React.ReactNode) => React.ReactNode
  }
}