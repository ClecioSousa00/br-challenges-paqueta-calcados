import { ReactNode, createContext, useContext, useState } from 'react'

const FavoritesContext = createContext({})

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState(0)

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  )
}
export const useFavoriteContext = () => useContext(FavoritesContext)
