import { useLocalStorage } from '@/hooks/useLocalStorage'
import { Shoe } from '@/types/shoesTypes'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

type ProductContextProps = {
  productList: Shoe[]
  setProductList: (productList: Shoe[]) => void
}

const ProductLocalStorageContext = createContext({} as ProductContextProps)
// UserProvider

export const LocalStorageProvider = ({ children }: { children: ReactNode }) => {
  const { product } = useLocalStorage()

  // const getproducts = getProductLocalStorage()
  const [productList, setProductList] = useState(product)
  useEffect(() => {
    if (product) {
      setProductList(product)
    }
  }, [product])

  return (
    <ProductLocalStorageContext.Provider
      value={{ productList, setProductList }}
    >
      {children}
    </ProductLocalStorageContext.Provider>
  )
}

export const useLocalStorageContext = () =>
  useContext(ProductLocalStorageContext)
// useUserContext
