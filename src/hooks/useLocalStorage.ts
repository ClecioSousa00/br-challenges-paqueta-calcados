'use client'
import { Shoe } from '@/types/shoesTypes'
import { useEffect, useState } from 'react'

export const useLocalStorage = () => {
  const key = '@paqueta:products'
  const [product, setProduct] = useState<Shoe[]>([])

  useEffect(() => {
    const getProductLocalStorage = () => {
      const data = localStorage.getItem(key)
      setProduct(JSON.parse(data!))
    }
    getProductLocalStorage()
  }, [])

  const setProductLocaStorage = (data: Shoe[]) => {
    localStorage.setItem(key, JSON.stringify(data))
  }

  return {
    product,
    setProductLocaStorage,
  }
}
