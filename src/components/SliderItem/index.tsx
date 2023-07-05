'use client'
import { SwiperSlide } from 'swiper/react'
import { ReactNode } from 'react'

type SliderItemProps = {
  children: ReactNode
}
export const SliderItem = ({ children }: SliderItemProps) => {
  return <SwiperSlide>{children}</SwiperSlide>
}
