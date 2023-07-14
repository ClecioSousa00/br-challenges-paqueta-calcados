'use client'
import { LocalStorageProvider } from '@/contexts/productsLocalStorage'
import { ReactNode } from 'react'

export const Providers = ({ children }: { children: ReactNode }) => {
  return <LocalStorageProvider>{children}</LocalStorageProvider>
}
