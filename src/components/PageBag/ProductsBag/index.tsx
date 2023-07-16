'use client'

import { useLocalStorageContext } from '@/contexts/productsLocalStorage'
import { Shoe } from '@/types/shoesTypes'
import { ProductBag } from '../ProductBag'

export const ProductsBag = () => {
  const { productList } = useLocalStorageContext()

  const generateproductList = (products: Shoe[]) => {
    return products.map((product: Shoe) => (
      <ProductBag data={product} key={product.id} />
    ))
  }

  return (
    <div className="mx-auto w-[80%] divide-y-2 divide-primary rounded-md bg-[#EDE9E9] px-12 py-8 ">
      {generateproductList(productList)}
    </div>
  )
}
