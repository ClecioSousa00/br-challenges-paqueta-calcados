'use client'
import { NumberingContainer } from '@/components/NemberingContainer'
import { Shoe } from '@/types/shoesTypes'
import Image from 'next/image'
import Link from 'next/link'
import { FaHeart, FaPinterestP } from 'react-icons/fa6'
import { LuFacebook, LuInstagram, LuTwitter, LuYoutube } from 'react-icons/lu'
import { PurchaseButton } from '../PurchaseButton'
import { parcelValue } from '@/utils/parcelValueProduct'
import { formattedValue } from '@/utils/formattedvalueProduct'
import { useEffect, useState } from 'react'
import { useAxios } from '@/hooks/useAxios'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { useLocalStorageContext } from '@/contexts/productsLocalStorage'
import { PurchaseMenssage } from '../PurchaseMenssage'

type ContainerProductProps = {
  idProduct: string
}

export const ContainerProduct = ({ idProduct }: ContainerProductProps) => {
  const [data, setProduct] = useState<Shoe>()
  const { setProductLocaStorage } = useLocalStorage()
  const { productList, setProductList } = useLocalStorageContext()
  const [isOpenMenssage, setIsOpenMenssage] = useState(false)

  useEffect(() => {
    const GetProduct = async () => {
      const [data] = await useAxios(`/shoe/${idProduct}`)
      setProduct(data)
    }
    GetProduct()
  }, [idProduct])

  if (!data) return
  console.log(data)

  // const valueProductFormatted = formattedValue(data.price.value)

  // const CalculateProductDiscount = (price: number, discount: number) => {
  //   const discountValue = price * discount
  //   const newDiscountPrice = price - discountValue

  //   return newDiscountPrice
  // }
  // const newDiscountPrice = CalculateProductDiscount(
  //   data.price.value,
  //   data.price.discount,
  // )
  // const newDiscountPriceFormatted = formattedValue(newDiscountPrice)
  // const parcelValueProduct = parcelValue(newDiscountPrice)

  const valueProductFormatted = formattedValue(data.price.value)

  const CalculateProductDiscount = (price: number, discount: number) => {
    const discountValue = price * discount
    const newDiscountPrice = price - discountValue

    return newDiscountPrice
  }
  const newDiscountPrice = CalculateProductDiscount(
    data.price.value,
    data.price.discount,
  )
  const newDiscountPriceFormatted = formattedValue(newDiscountPrice)
  const parcelValueProduct = parcelValue(newDiscountPrice)

  const handlePurchaseProduct = (id: string) => {
    const isProductAlreadySelected = productList.some(
      (product) => product.id === id,
    )

    if (!isProductAlreadySelected) {
      setProductList([...productList, data])
      setProductLocaStorage(data)
    }
    setIsOpenMenssage(true)
    // setProductList([...productList, data])
    // setProductLocaStorage(data)
  }

  const closeMenssagePurchase = () => {
    setIsOpenMenssage(false)
  }

  return (
    <>
      <Link
        className="mt-10 inline-block font-alt text-base text-secondary-2"
        href={'/'}
      >
        Paquetá &gt;{' '}
      </Link>
      <span className="inline-block border-b-2 border-b-primary font-alt text-base text-secondary">
        {data.name}
      </span>
      <div className="flex">
        <div className="w-[50%]">
          <div className="h-[550px] w-[550px] overflow-hidden">
            <Image
              className="h-auto w-full"
              src={data?.image}
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
            <button>
              <FaHeart size={26} color="#CF5D00" />
            </button>
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
            {isOpenMenssage && (
              <div className="absolute -bottom-[130px] right-0">
                {' '}
                <PurchaseMenssage
                  isOpen={isOpenMenssage}
                  closeMenssage={closeMenssagePurchase}
                />
              </div>
            )}
          </div>
          <div className="w-[50%]">
            <PurchaseButton
              handlePurchaseProduct={() => handlePurchaseProduct(data.id)}
              type={data.soldout}
            />
          </div>
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

      <div className="mt-20">
        <h2 className="mb-4 font-alt text-3xl font-semibold uppercase text-dark">
          talvez possa lhe interessar
        </h2>
      </div>
    </>
  )
}
