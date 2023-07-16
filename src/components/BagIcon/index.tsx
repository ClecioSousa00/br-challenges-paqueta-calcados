'use client'
import { useLocalStorageContext } from '@/contexts/productsLocalStorage'
import { useRouter } from 'next/navigation'

import { LuShoppingBag } from 'react-icons/lu'

export const BagIcon = () => {
  const { productList } = useLocalStorageContext()
  const router = useRouter()
  return (
    <button
      onClick={() => router.push('/bag')}
      className="relative flex items-center gap-3"
    >
      {productList.length > 0 && (
        <span className="absolute -top-2 left-2 h-5 w-5 rounded-full bg-gradientBar pt-1 text-center text-xs text-white">
          {productList.length}
        </span>
      )}
      <LuShoppingBag size={26} />

      <span className="text-sm font-normal">Sacola</span>
    </button>
  )
}
