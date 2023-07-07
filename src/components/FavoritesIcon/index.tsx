'use client'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { LuHeart } from 'react-icons/lu'
import { useEffect } from 'react'
import { useFavoriteContext } from '@/context/Favorites'

export const FavoritesIcon = () => {
  const { favorites, setFavorites } = useFavoriteContext()
  const { getLocalStorage } = useLocalStorage('favorites', [])

  useEffect(() => {
    const value = getLocalStorage('favorites')
    setFavorites(value)
  }, [favorites])

  return (
    <>
      <div className="relative">
        {favorites && (
          <span className="absolute -right-1 -top-2 h-5 w-5 rounded-full bg-gradientBar pt-1 text-center text-xs text-white">
            {favorites}
          </span>
        )}
        <LuHeart size={26} />
      </div>
      <span className="text-sm font-normal">Lista de desejos</span>
    </>
  )
}
