import { ReactNode, createContext, useContext, useState } from 'react'

const DataShoesContext = createContext({})

export const DataShoesProvider = ({ children }: { children: ReactNode }) => {
  const [name] = useState('')

  return (
    <DataShoesContext.Provider value={{ name }}>
      {children}
    </DataShoesContext.Provider>
  )
}
export const useDataShoesContext = () => useContext(DataShoesContext)
