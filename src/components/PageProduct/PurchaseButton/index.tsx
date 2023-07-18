'use client'

import { useLocalStorageContext } from '@/contexts/productsLocalStorage'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { Shoe } from '@/types/shoesTypes'
import { useState } from 'react'
import { PurchaseMenssage } from '../PurchaseMenssage'

type PurchaseButtonProps = {
  type: boolean
  product: Shoe
}

export const PurchaseButton = ({ type, product }: PurchaseButtonProps) => {
  const { setProductLocaStorage } = useLocalStorage()
  const { productList, setProductList } = useLocalStorageContext()
  const [isOpenMenssage, setIsOpenMenssage] = useState(false)

  const handlePurchaseProduct = () => {
    const isProductAlreadySelected = productList.some(
      (products) => products.id === product.id,
    )

    if (!isProductAlreadySelected) {
      setProductList([...productList, product])
      setProductLocaStorage([...productList, product])
    }
    setIsOpenMenssage(true)
    setTimeout(() => {
      setIsOpenMenssage(false)
    }, 2000)
  }

  const handleClick = () => {
    if (!type) handlePurchaseProduct()
  }
  return (
    <div className="relative ">
      <button
        onClick={handleClick}
        className={`inline-block w-[50%] rounded  px-2 py-2 text-center text-base uppercase transition-all hover:scale-105 
        ${type ? 'bg-primary-2' : 'bg-primary-3'}`}
      >
        {type ? 'Me avise quando chegar' : 'Comprar'}
      </button>
      {isOpenMenssage && (
        <div className="absolute -right-20 ">
          {' '}
          <PurchaseMenssage isOpen={isOpenMenssage} />
        </div>
      )}
    </div>
  )
}
