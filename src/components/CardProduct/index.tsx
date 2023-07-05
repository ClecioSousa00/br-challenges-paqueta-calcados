import Image from 'next/image'
import { LuHeart } from 'react-icons/lu'
import { ButtonGeneric } from '../ButtonGeneric'
import { Shoe } from '@/types/shoesTypes'

type CardProductProps = {
  data: Shoe
}

export const CardProduct = ({ data }: CardProductProps) => {
  return (
    <div className=" flex h-[380px] w-[290px] flex-col justify-between overflow-hidden rounded pb-6 shadow-lg">
      <button className="mb-1 bg-primary-2  py-1 uppercase">
        Produto esgotado
      </button>
      <div className="px-5">
        <div className="flex justify-end">
          <LuHeart size={26} color="#CF5D00" />
        </div>
        <div className="mx-auto flex h-[150px]  w-[210px] items-center justify-center overflow-hidden">
          <Image src={data.image} width={1000} height={1000} alt="aa" />
        </div>
        <div>
          <p className="mb-3 font-alt text-sm font-medium uppercase text-dark">
            {data.name}
          </p>
          <strong className="  block font-alt font-bold text-dark">
            R$ {data.price.value}
          </strong>
          <p className="mb-3 font-alt text-xs text-secondary">OU 9X R$ 16,66</p>
        </div>
        <ButtonGeneric text="Comprar" />
      </div>
    </div>
  )
}
