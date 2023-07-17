'use client'

import { useLocalStorageContext } from '@/contexts/productsLocalStorage'
import { Shoe } from '@/types/shoesTypes'
import { ProductBag } from '../ProductBag'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { EmptyBag } from '../EmptyBag'

export const ProductsBag = () => {
  const { productList, setProductList } = useLocalStorageContext()
  const { setProductLocaStorage } = useLocalStorage()

  const removeProductLocalStorage = (id: string) => {
    const newData = productList.filter((item) => item.id !== id)
    setProductList(newData)
    setProductLocaStorage(newData)
  }

  const generateproductList = (products: Shoe[]) => {
    return products.map((product: Shoe) => (
      <ProductBag
        data={product}
        key={product.id}
        removeProductLocalStorage={removeProductLocalStorage}
      />
    ))
  }

  return (
    <div className="mx-auto mt-10 w-[80%] divide-y-2 divide-primary rounded-md bg-[#EDE9E9] px-12 py-8 ">
      {productList.length > 0 ? generateproductList(productList) : <EmptyBag />}
    </div>
  )
}
