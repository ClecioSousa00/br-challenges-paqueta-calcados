'use client'
import { useLocalStorageContext } from '@/contexts/productsLocalStorage'

import { LuShoppingBag } from 'react-icons/lu'

export const BagIcon = () => {
  const { productList } = useLocalStorageContext()

  return (
    <>
      <div className="relative">
        {productList.length && (
          <span className="absolute -right-1 -top-2 h-5 w-5 rounded-full bg-gradientBar pt-1 text-center text-xs text-white">
            {productList.length}
          </span>
        )}
        <LuShoppingBag size={26} />
      </div>
      <span className="text-sm font-normal">Sacola</span>
    </>
  )
}
