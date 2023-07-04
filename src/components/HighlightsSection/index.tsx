import Link from 'next/link'
import { CardProduct } from '../CardProduct'
// import { axiosInstance } from '@/services/api'
import { useAxios } from '@/hooks/useAxios'

// type Price = {
//   value: number
//   discount: number
// }

// type Shoe = {
//   id: string
//   name: string
//   price: Price
//   soldout: boolean
//   image: string
//   description: string
// }

// const getData = async (): Promise<Shoe[]> => {
//   const response = await axiosInstance.get('')

//   return response.data
// }

export const HighlightsSection = async () => {
  const dataShoes = await useAxios()

  return (
    <div className="mt-28">
      <div className=" mb-11 flex items-baseline justify-between">
        <h2 className="font-alt text-3xl font-semibold uppercase text-dark">
          destaques
        </h2>{' '}
        <Link
          href={'#'}
          className="border-b-2 border-b-primary-2 font-alt text-base uppercase text-dark"
        >
          Conferir tudo
        </Link>
      </div>
      {dataShoes.map((shoes) => (
        <CardProduct key={shoes.id} data={shoes} />
      ))}
    </div>
  )
}
