import { LuHeart } from 'react-icons/lu'

export const FavoritesIcon = () => {
  return (
    <>
      <div className="relative">
        <LuHeart size={26} />
      </div>
      <span className="text-sm font-normal">Lista de desejos</span>
    </>
  )
}
