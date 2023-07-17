import { LuShoppingBag } from 'react-icons/lu'
export const EmptyBag = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      <LuShoppingBag size={50} className="text-secondary" />
      <p className="text-base text-secondary ">Sacola vazia</p>
    </div>
  )
}
