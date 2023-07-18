import Image from 'next/image'
import { Shoe } from '@/types/shoesTypes'
import { CardButton } from '../CardButton'
import { ButtonFavoriteCard } from '../ButtonFavoriteCard'
import { parcelValue } from '@/utils/parcelValueProduct'
import { formattedValue } from '@/utils/formattedvalueProduct'

type CardProductProps = {
  data: Shoe
}

export const CardProduct = ({ data }: CardProductProps) => {
  const valueFormattedProduct = formattedValue(data.price.value)
  const newParcelValue = parcelValue(data.price.value)
  return (
    <div className=" flex h-[360px] w-[270px] flex-col overflow-hidden rounded pb-6 shadow-cardShadow">
      {data.soldout && (
        <p className=" bg-primary-2 py-1 text-center uppercase">
          Produto esgotado
        </p>
      )}

      <div className="flex h-full flex-col justify-end px-5">
        <div className="flex justify-end">
          <ButtonFavoriteCard />
        </div>
        <div className="mx-auto flex h-[150px] w-[210px] items-center justify-center overflow-hidden">
          <Image
            className="h-auto w-full"
            src={data.image}
            width="0"
            height="0"
            unoptimized
            priority={true}
            alt={data.name}
          />
        </div>
        <div className="h-20">
          <p className=" font-alt text-xs font-medium uppercase text-dark">
            {data.name}
          </p>
          <strong className="  block font-alt font-bold text-dark">
            {valueFormattedProduct}
          </strong>
          <p className="mb-3 font-alt text-xs text-secondary">
            OU 10X R$ {newParcelValue}
          </p>
        </div>
        <CardButton type={data.soldout} id={data.id} />
      </div>
    </div>
  )
}
