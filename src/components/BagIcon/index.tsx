'use client'
import { useLocalStorage } from '@/hooks/useLocaStorage'
import { LuShoppingBag } from 'react-icons/lu'

export const BagIcon = () => {
  const { value } = useLocalStorage('itemsBag', [])

  return (
    <>
      <div className="relative">
        {value && (
          <span className="absolute -right-1 -top-2 h-5 w-5 rounded-full bg-gradientBar pt-1 text-center text-xs text-white">
            {value}
          </span>
        )}
        <LuShoppingBag size={26} />
      </div>
      <span className="text-sm font-normal">Sacola</span>
    </>
  )
}
