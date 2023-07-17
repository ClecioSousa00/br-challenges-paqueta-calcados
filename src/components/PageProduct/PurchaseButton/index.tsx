'use client'

import { useLocalStorageContext } from '@/contexts/productsLocalStorage'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { Shoe } from '@/types/shoesTypes'

type PurchaseButtonProps = {
  type: boolean
  product: Shoe
}

export const PurchaseButton = ({ type, product }: PurchaseButtonProps) => {
  const { setProductLocaStorage } = useLocalStorage()
  const { productList, setProductList } = useLocalStorageContext()

  const handlePurchaseProduct = () => {
    const isProductAlreadySelected = productList.some(
      (products) => products.id === product.id,
    )

    if (!isProductAlreadySelected) {
      setProductList([...productList, product])
      setProductLocaStorage([...productList, product])
    }
  }

  const handleClick = () => {
    if (!type) handlePurchaseProduct()
  }
  return (
    <button
      onClick={handleClick}
      className={`inline-block w-full rounded  px-2 py-2 text-center text-base uppercase ${
        type ? 'bg-primary-2' : 'bg-primary-3'
      }`}
    >
      {type ? 'Me avise quando chegar' : 'Comprar'}
    </button>
  )
}
// type PurchaseButtonProps = {
//   type: boolean
//   handlePurchaseProduct: () => void
// }

// export const PurchaseButton = ({
//   type,
//   handlePurchaseProduct,
// }: PurchaseButtonProps) => {
//   const handleClick = () => {
//     if (!type) handlePurchaseProduct()
//   }
//   return (
//     <button
//       onClick={handleClick}
//       className={`inline-block w-full rounded  px-2 py-2 text-center text-base uppercase ${
//         type ? 'bg-primary-2' : 'bg-primary-3'
//       }`}
//     >
//       {type ? 'Me avise quando chegar' : 'Comprar'}
//     </button>
//   )
// }
