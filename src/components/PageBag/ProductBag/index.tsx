import { Shoe } from '@/types/shoesTypes'
import Image from 'next/image'
import { LuTrash2 } from 'react-icons/lu'

type ProductBagProps = {
  data: Shoe
}

export const ProductBag = ({ data }: ProductBagProps) => {
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
            <p>Numeração:</p>
            <p>Cor:</p>
            <p>Quantidade:</p>
            <p>Preço: {data.price.value}</p>
          </div>
        </div>
      </div>
      <button className="flex items-center gap-2 px-2 py-2 text-secondary">
        <LuTrash2 /> Remover
      </button>
    </div>
  )
}
