import { axiosInstance } from '@/services/api'

type Price = {
  value: number
  discount: number
}

type Shoe = {
  id: string
  name: string
  price: Price
  soldout: boolean
  image: string
  description: string
}

export const useAxios = async () => {
  const response = await axiosInstance.get<Shoe[]>('')

  return response.data
}
