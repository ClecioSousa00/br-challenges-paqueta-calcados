'use client'
import { BagProvider } from '@/context/Bag/bagContext'
import { FavoritesProvider } from '@/context/Favorites'
import { ReactNode } from 'react'

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <BagProvider>
      <FavoritesProvider>{children}</FavoritesProvider>
    </BagProvider>
  )
}
