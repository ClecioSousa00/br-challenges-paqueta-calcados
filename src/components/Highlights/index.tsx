import Link from 'next/link'
// import { axiosInstance } from '@/services/api'
import { useAxios } from '@/hooks/useAxios'
import { Slider } from './Slider'

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

export const Highlights = async () => {
  const dataShoes = await useAxios('/shoes')

  return (
    <>
      <div className="mb-11 mt-28">
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
        <Slider data={dataShoes} />
      </div>
      {/* <Slider>
        {dataShoes.map((shoes) => (
          <SliderItem key={shoes.id}>
            <CardProduct key={shoes.id} data={shoes} />
          </SliderItem>
        ))}
      </Slider> */}
      <div className="mt-10 h-20"></div>
    </>
  )
}
