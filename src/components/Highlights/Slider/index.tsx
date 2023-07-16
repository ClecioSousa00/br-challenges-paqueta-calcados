'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y, Scrollbar } from 'swiper/modules'

import { ReactNode } from 'react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/a11y'
import 'swiper/css/scrollbar'

// type SliderProps = {
//   children: ReactNode
// }

import { Shoe } from '@/types/shoesTypes'
import { CardProduct } from '../../CardProduct'

type SliderProps = {
  data: Shoe[]
}

export const Slider = ({ data }: SliderProps) => {
  const showSlide = (): ReactNode => {
    return data.map((slide) => {
      return (
        <SwiperSlide key={slide.id}>
          <CardProduct data={slide} />
        </SwiperSlide>
      )
    })
  }

  return (
    <Swiper
      modules={[Navigation, A11y, Scrollbar]}
      slidesPerView={4}
      spaceBetween={10}
      loop={true}
      navigation={true}
      scrollbar={{
        hide: true,
      }}
      className="h-full"
    >
      {showSlide()}
    </Swiper>
  )
}
// export const Slider = ({ children }: SliderProps) => {
//   return (
//     <Swiper
//       modules={[Pagination, Navigation]}
//       slidesPerView={4}
//       spaceBetween={10}
//       loop={true}
//       pagination={{
//         clickable: true,
//       }}
//       navigation={true}
//       className="h-full"
//     >
//       {children}
//     </Swiper>
//   )
// }
