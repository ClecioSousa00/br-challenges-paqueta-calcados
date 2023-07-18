import Image from 'next/image'

import { CalculateProductDiscount } from '@/utils/calculateProductDiscount'
import { formattedValue } from '@/utils/formattedvalueProduct'
import { parcelValue } from '@/utils/parcelValueProduct'
import { LuFacebook, LuInstagram, LuTwitter, LuYoutube } from 'react-icons/lu'
import { FaPinterestP } from 'react-icons/fa6'
import { useAxios } from '@/hooks/useAxios'

import { NumberingContainer } from '@/components/NemberingContainer'
import { PurchaseButton } from '../PurchaseButton'
import { ButtonFavoriteCard } from '@/components/ButtonFavoriteCard'
import { BackButton } from '@/components/BackButton'

type ContainerProductProps = {
  id: string
}

export const ContainerProduct = async ({ id }: ContainerProductProps) => {
  const [data] = await useAxios(`/shoe/${id}`)

  const valueProductFormatted = formattedValue(data.price.value)

  const newDiscountPrice = CalculateProductDiscount(
    data.price.value,
    data.price.discount,
  )
  const newDiscountPriceFormatted = formattedValue(newDiscountPrice)
  const parcelValueProduct = parcelValue(newDiscountPrice)

  return (
    <main>
      <BackButton routeName={data.name} />
      <div className="flex">
        <div className="w-1/2">
          <div className="h-[550px] w-[550px] overflow-hidden">
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
          <div>
            <p className="font-alt text-base text-secondary">Compartilhe</p>
            <div className="mt-3 flex gap-2">
              <LuInstagram color="#383838" size={28} />
              <LuFacebook color="#383838" size={28} />
              <LuTwitter color="#383838" size={28} />
              <LuYoutube color="#383838" size={28} />
              <FaPinterestP color="#383838" size={28} />
            </div>
          </div>
        </div>

        <div className="w-[50%]">
          <div>
            <ButtonFavoriteCard />
            <p className="max-w-[450px] font-alt text-4xl font-semibold text-dark">
              {data.name}
            </p>
            <span className="font-alt text-base text-secondary">
              Código do produto: {data.id}
            </span>
          </div>
          <div className="mt-12">
            {data.price.discount && (
              <div className="mb-4 flex items-center gap-5">
                <span className="text-5 font-alt text-secondary">
                  {valueProductFormatted}
                </span>
                <p className="rounded bg-success px-3 font-alt text-sm font-semibold">
                  {data.price.discount * 100}% de desconto
                </p>
              </div>
            )}
            <p className="font-alt text-4xl font-bold text-dark">
              {newDiscountPriceFormatted}
            </p>
            <span className="text-lg  text-secondary">
              ou 10x R$ {parcelValueProduct}
            </span>
          </div>
          <div className="relative mt-10">
            <p className="text-alt mb-5 text-lg text-secondary">
              Escolha a numeração:
            </p>
            <NumberingContainer />
            <button className="mb-5 mt-5 cursor-pointer text-base font-semibold text-secondary-2">
              Guia de tamanhos
            </button>
          </div>

          <PurchaseButton product={data} type={data.soldout} />
        </div>
      </div>

      <div className="mt-20">
        <h2 className="mb-4 font-alt text-3xl font-semibold uppercase text-dark">
          descrição do produto
        </h2>
        <p className="font-alt text-lg font-light text-secondary">
          {data.description}
        </p>
      </div>
    </main>
  )
}
