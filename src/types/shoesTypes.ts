type Price = {
  value: number
  discount: number
}

export type Shoe = {
  id: string
  name: string
  price: Price
  soldout: boolean
  image: string
  description: string
}
