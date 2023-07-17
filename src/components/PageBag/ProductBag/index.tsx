'use client'
import { Shoe } from '@/types/shoesTypes'
import { CalculateProductDiscount } from '@/utils/calculateProductDiscount'
import { formattedValue } from '@/utils/formattedvalueProduct'
import Image from 'next/image'
import { LuTrash2 } from 'react-icons/lu'

type ProductBagProps = {
  data: Shoe
  removeProductLocalStorage: (id: string) => void
}

export const ProductBag = ({
  removeProductLocalStorage,
  data,
}: ProductBagProps) => {
  let formattedPrice = formattedValue(data.price.value)
  if (data.price.discount) {
    const productDiscountPrice = CalculateProductDiscount(
      data.price.value,
      data.price.discount,
    )
    formattedPrice = formattedValue(productDiscountPrice)
  }

  return (
    <div key={data.id} className="flex items-start justify-between py-6">
      <div className="flex items-start justify-between">
        <div className="h-[230px] w-[230px] overflow-hidden">
          <Image
            className="h-full w-full"
            src={data.image}
            unoptimized
            width={'0'}
            height={'0'}
            priority
            alt="foto"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-dark">{data.name}</h3>
          <p className="font-alt text-sm text-secondary opacity-60">
            Código do produto {data.id}
          </p>
          <div className="mt-5 space-y-2 font-alt text-base font-bold text-secondary">
            <div className="flex items-center gap-3">
              <p>Quantidade: 1</p>
            </div>
            <p>Preço: {formattedPrice}</p>
          </div>
        </div>
      </div>
      <button
        onClick={() => removeProductLocalStorage(data.id)}
        className="flex items-center gap-2 px-2 py-2 text-secondary"
      >
        <LuTrash2 /> Remover
      </button>
    </div>
  )
}
