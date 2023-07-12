// import Image from 'next/image'
// import Link from 'next/link'
// import { LuInstagram, LuFacebook, LuTwitter, LuYoutube } from 'react-icons/lu'
// import { FaPinterestP, FaHeart } from 'react-icons/fa6'
// import { useAxios } from '@/hooks/useAxios'
// import { Shoe } from '@/types/shoesTypes'
// import { useEffect, useState } from 'react'
import { Container } from '@/components/Container'
// import { NumberingContainer } from '@/components/NemberingContainer'
// import { PurchaseButton } from '@/components/PageProduct/PurchaseButton'
import { ContainerProduct } from '@/components/PageProduct/ContainerProduct'
import { ListProducts } from '@/components/PageProduct/ListProducts'

type ParamsProps = {
  params: {
    productId: string
  }
}

export default function Product({ params }: ParamsProps) {
  // const [product, setProduct] = useState<Shoe>()

  // useEffect(() => {
  //   const GetProduct = async () => {
  //     const [data] = await useAxios(`/shoe/${params.productId}`)
  //     setProduct(data)
  //   }
  //   GetProduct()
  // }, [])

  // if (!product) return
  if (!params.productId) return

  return (
    <Container>
      <ContainerProduct idProduct={params.productId} />
      <ListProducts />
      {/* <Link
        className="mt-10 inline-block font-alt text-base text-secondary-2"
        href={'/'}
      >
        Paquetá &gt;{' '}
      </Link>
      <span className="inline-block border-b-2 border-b-primary font-alt text-base text-secondary">
        {product.name}
      </span>
      <div className="flex">
        <div className="w-[50%]">
          <div className="h-[550px] w-[550px] overflow-hidden">
            <Image
              className="h-auto w-full"
              src={product?.image}
              width="0"
              height="0"
              unoptimized
              priority={true}
              alt={product.name}
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
              {product.name}
            </p>
            <span className="font-alt text-base text-secondary">
              Código do produto: {product.id}
            </span>
          </div>
          <div className="mt-12">
            <div className="mb-4 flex items-center gap-5">
              <span className="text-5 font-alt text-secondary">
                R$ {product.price.value}
              </span>
              <p className="rounded bg-success px-3 font-alt text-sm font-semibold">
                {product.price.discount}% de desconto
              </p>
            </div>
            <p className="font-alt text-4xl font-bold text-dark">R$ 149,90</p>
            <span className="text-lg  text-secondary">ou 9x R$ 16,66</span>
          </div>
          <div className="mt-10">
            <p className="text-alt mb-5 text-lg text-secondary">
              Escolha a numeração:
            </p>
            <NumberingContainer />
            <button className="mb-5 mt-5 cursor-pointer text-base font-semibold text-secondary-2">
              Guia de tamanhos
            </button>
          </div>
          <div className="w-[50%]">
            <PurchaseButton type={product.soldout} />
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="mb-4 font-alt text-3xl font-semibold uppercase text-dark">
          descrição do produto
        </h2>
        <p className="font-alt text-lg font-light text-secondary">
          {product.description}
        </p>
      </div>

      <div className="mt-20">
        <h2 className="mb-4 font-alt text-3xl font-semibold uppercase text-dark">
          talvez possa lhe interessar
        </h2>
      </div> */}
    </Container>
  )
}
