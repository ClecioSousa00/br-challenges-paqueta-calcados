import { LuHeart } from 'react-icons/lu'

export const FavoritesIcon = () => {
  return (
    <>
      <div className="relative">
        {/* {product.length && (
          <span className="absolute -right-1 -top-2 h-5 w-5 rounded-full bg-gradientBar pt-1 text-center text-xs text-white">
            {product.length}
          </span>
        )} */}
        <LuHeart size={26} />
      </div>
      <span className="text-sm font-normal">Lista de desejos</span>
    </>
  )
}
