import { FaRegHeart, FaHeart } from 'react-icons/fa6'
type ButtonFavoriteCardProps = {
  hasSelect: boolean
  addProductFavorites: () => void
}

export const ButtonFavoriteCard = ({
  hasSelect,
  addProductFavorites,
}: ButtonFavoriteCardProps) => {
  return (
    <div className="flex justify-end">
      <button onClick={addProductFavorites}>
        {hasSelect ? (
          <FaHeart size={26} color="#CF5D00" />
        ) : (
          <FaRegHeart size={26} color="#CF5D00" />
        )}
      </button>
    </div>
  )
}
