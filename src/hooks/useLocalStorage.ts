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
    // const dataProducts = localStorage.getItem(key)
    // const currentProducts = dataProducts ? JSON.parse(dataProducts) : []
    // const dataFormatted = [...currentProducts, data]
    localStorage.setItem(key, JSON.stringify(data))
  }

  return {
    product,
    setProductLocaStorage,
  }
}
