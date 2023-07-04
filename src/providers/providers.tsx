'use client'
import { DataShoesProvider } from '@/context/dataShoes'
import { ReactNode } from 'react'

export const Providers = ({ children }: { children: ReactNode }) => {
  return <DataShoesProvider>{children}</DataShoesProvider>
}
