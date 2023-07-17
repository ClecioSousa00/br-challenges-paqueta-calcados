// 'use client'
import Image from 'next/image'
// import Link from 'next/link'
// import { useEffect, useState } from 'react'
// import { useAxios } from '@/hooks/useAxios'
import { CalculateProductDiscount } from '@/utils/calculateProductDiscount'
import { formattedValue } from '@/utils/formattedvalueProduct'
// import { useLocalStorage } from '@/hooks/useLocalStorage'
// import { Shoe } from '@/types/shoesTypes'
import { parcelValue } from '@/utils/parcelValueProduct'
// import { useLocalStorageContext } from '@/contexts/productsLocalStorage'

import { NumberingContainer } from '@/components/NemberingContainer'
import { FaPinterestP } from 'react-icons/fa6'
import { LuFacebook, LuInstagram, LuTwitter, LuYoutube } from 'react-icons/lu'
import { PurchaseButton } from '../PurchaseButton'
// import { PurchaseMenssage } from '../PurchaseMenssage'
import { ButtonFavoriteCard } from '@/components/ButtonFavoriteCard'
import { BackButton } from '@/components/BackButton'
import { useAxios } from '@/hooks/useAxios'

type ContainerProductProps = {
  id: string
}

// type ContainerProductProps = {
//   dataProduct: Shoe
// }

export const ContainerProduct = async ({ id }: ContainerProductProps) => {
  const [data] = await useAxios(`/shoe/${id}`)
  // const { setProductLocaStorage } = useLocalStorage()
  // const { productList, setProductList } = useLocalStorageContext()
  // const [isOpenMenssage, setIsOpenMenssage] = useState(false)

  const valueProductFormatted = formattedValue(data.price.value)

  const newDiscountPrice = CalculateProductDiscount(
    data.price.value,
    data.price.discount,
  )
  const newDiscountPriceFormatted = formattedValue(newDiscountPrice)
  const parcelValueProduct = parcelValue(newDiscountPrice)

  // const handlePurchaseProduct = (id: string) => {
  //   const isProductAlreadySelected = productList.some(
  //     (product) => product.id === id,
  //   )

  //   if (!isProductAlreadySelected) {
  //     setProductList([...productList, data])
  //     setProductLocaStorage([...productList, data])
  //   }

  //   setIsOpenMenssage(true)
  //   setTimeout(() => {
  //     setIsOpenMenssage(false)
  //   }, 2000)
  // }

  // const closeMenssagePurchase = () => {
  //   setIsOpenMenssage(false)
  // }

  return (
    <main className="mt-32">
      {/* <Link
        className="mt-10 inline-block font-alt text-base text-secondary-2"
        href={'/'}
      >
        Paquetá &gt;{' '}
      </Link>
      <span className="inline-block border-b-2 border-b-primary font-alt text-base text-secondary">
        {data.name}
      </span> */}
      <BackButton routeName={data.name} />
      <div className="flex">
        <div className="w-[50%]">
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
            {/* {isOpenMenssage && (
              <div className="absolute -bottom-[130px] right-0">
                {' '}
                <PurchaseMenssage
                  isOpen={isOpenMenssage}
                  closeMenssage={closeMenssagePurchase}
                />
              </div>
            )} */}
          </div>

          <PurchaseButton product={data} type={data.soldout} />

          {/* <div className="w-[50%]">
            <PurchaseButton product={data} type={data.soldout} />
          </div> */}
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
// type ContainerProductProps = {
//   idProduct: string
// }

// export const ContainerProduct = ({ idProduct }: ContainerProductProps) => {
//   const [data, setProduct] = useState<Shoe>({} as Shoe)
//   const { setProductLocaStorage } = useLocalStorage()
//   const { productList, setProductList } = useLocalStorageContext()
//   const [isOpenMenssage, setIsOpenMenssage] = useState(false)

//   useEffect(() => {
//     const GetProduct = async () => {
//       const [data] = await useAxios(`/shoe/${idProduct}`)
//       setProduct(data)
//     }
//     GetProduct()
//   }, [idProduct])

//   if (!data.id) return

//   const valueProductFormatted = formattedValue(data.price.value)

//   const newDiscountPrice = CalculateProductDiscount(
//     data.price.value,
//     data.price.discount,
//   )
//   const newDiscountPriceFormatted = formattedValue(newDiscountPrice)
//   const parcelValueProduct = parcelValue(newDiscountPrice)

//   const handlePurchaseProduct = (id: string) => {
//     const isProductAlreadySelected = productList.some(
//       (product) => product.id === id,
//     )

//     if (!isProductAlreadySelected) {
//       setProductList([...productList, data])
//       setProductLocaStorage([...productList, data])
//     }

//     setIsOpenMenssage(true)
//     setTimeout(() => {
//       setIsOpenMenssage(false)
//     }, 2000)
//   }

//   const closeMenssagePurchase = () => {
//     setIsOpenMenssage(false)
//   }

//   return (
//     <main className="mt-32">
//       {/* <Link
//         className="mt-10 inline-block font-alt text-base text-secondary-2"
//         href={'/'}
//       >
//         Paquetá &gt;{' '}
//       </Link>
//       <span className="inline-block border-b-2 border-b-primary font-alt text-base text-secondary">
//         {data.name}
//       </span> */}
//       <BackButton routeName={data.name} />
//       <div className="flex">
//         <div className="w-[50%]">
//           <div className="h-[550px] w-[550px] overflow-hidden">
//             <Image
//               className="h-auto w-full"
//               src={data.image}
//               width="0"
//               height="0"
//               unoptimized
//               priority={true}
//               alt={data.name}
//             />
//           </div>
//           <div>
//             <p className="font-alt text-base text-secondary">Compartilhe</p>
//             <div className="mt-3 flex gap-2">
//               <LuInstagram color="#383838" size={28} />
//               <LuFacebook color="#383838" size={28} />
//               <LuTwitter color="#383838" size={28} />
//               <LuYoutube color="#383838" size={28} />
//               <FaPinterestP color="#383838" size={28} />
//             </div>
//           </div>
//         </div>

//         <div className="w-[50%]">
//           <div>
//             <ButtonFavoriteCard />
//             <p className="max-w-[450px] font-alt text-4xl font-semibold text-dark">
//               {data.name}
//             </p>
//             <span className="font-alt text-base text-secondary">
//               Código do produto: {data.id}
//             </span>
//           </div>
//           <div className="mt-12">
//             {data.price.discount && (
//               <div className="mb-4 flex items-center gap-5">
//                 <span className="text-5 font-alt text-secondary">
//                   {valueProductFormatted}
//                 </span>
//                 <p className="rounded bg-success px-3 font-alt text-sm font-semibold">
//                   {data.price.discount * 100}% de desconto
//                 </p>
//               </div>
//             )}
//             <p className="font-alt text-4xl font-bold text-dark">
//               {newDiscountPriceFormatted}
//             </p>
//             <span className="text-lg  text-secondary">
//               ou 10x R$ {parcelValueProduct}
//             </span>
//           </div>
//           <div className="relative mt-10">
//             <p className="text-alt mb-5 text-lg text-secondary">
//               Escolha a numeração:
//             </p>
//             <NumberingContainer />
//             <button className="mb-5 mt-5 cursor-pointer text-base font-semibold text-secondary-2">
//               Guia de tamanhos
//             </button>
//             {isOpenMenssage && (
//               <div className="absolute -bottom-[130px] right-0">
//                 {' '}
//                 <PurchaseMenssage
//                   isOpen={isOpenMenssage}
//                   closeMenssage={closeMenssagePurchase}
//                 />
//               </div>
//             )}
//           </div>
//           <div className="w-[50%]">
//             <PurchaseButton
//               handlePurchaseProduct={() => handlePurchaseProduct(data.id)}
//               type={data.soldout}
//             />
//           </div>
//         </div>
//       </div>

//       <div className="mt-20">
//         <h2 className="mb-4 font-alt text-3xl font-semibold uppercase text-dark">
//           descrição do produto
//         </h2>
//         <p className="font-alt text-lg font-light text-secondary">
//           {data.description}
//         </p>
//       </div>
//     </main>
//   )
// }
