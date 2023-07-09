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

export const useAxios = async (route: string) => {
  const response = await axiosInstance.get<Shoe[]>(`${route}`)

  return response.data
}
