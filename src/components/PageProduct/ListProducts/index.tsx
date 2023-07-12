import { CardProduct } from '@/components/CardProduct'
import { axiosInstance } from '@/services/api'
import { Shoe } from '@/types/shoesTypes'

export const ListProducts = async () => {
  const dataShoes = await axiosInstance<Shoe[]>('/shoes')
  const listDataShoes: Shoe[] = dataShoes.data.slice(0, 4)

  return (
    <div className="flex justify-center gap-3">
      {listDataShoes.map((shoe) => (
        <CardProduct key={shoe.id} data={shoe} />
      ))}
    </div>
  )
}
