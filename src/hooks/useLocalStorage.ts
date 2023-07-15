'use client'
import { Shoe } from '@/types/shoesTypes'

export const useLocalStorage = () => {
  const key = '@paqueta:products'

  const getProductLocalStorage = () => {
    const data = localStorage.getItem(key)
    return JSON.parse(data!)
  }

  const setProductLocaStorage = (data: Shoe) => {
    const dataProducts = localStorage.getItem(key)
    const currentProducts = dataProducts ? JSON.parse(dataProducts) : []
    const dataFormatted = [...currentProducts, data]
    localStorage.setItem(key, JSON.stringify(dataFormatted))
  }

  return {
    getProductLocalStorage,
    setProductLocaStorage,
  }
}
