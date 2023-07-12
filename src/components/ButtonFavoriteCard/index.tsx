import { useState } from 'react'
import { FaRegHeart, FaHeart } from 'react-icons/fa6'

export const ButtonFavoriteCard = () => {
  const [favoriteSelect, setFavoriteSelect] = useState(false)

  const addProductFavorites = () => {
    setFavoriteSelect(!favoriteSelect)
  }
  return (
    <div className="flex justify-end">
      <button onClick={() => addProductFavorites()}>
        {favoriteSelect ? (
          <FaHeart size={26} color="#CF5D00" />
        ) : (
          <FaRegHeart size={26} color="#CF5D00" />
        )}
      </button>
    </div>
  )
}
