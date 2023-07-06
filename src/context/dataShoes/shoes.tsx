import { useAxios } from '@/hooks/useAxios'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

const DataShoesContext = createContext({})

export const DataShoesProvider = ({ children }: { children: ReactNode }) => {
  const [dataShoes, setDataShoes] = useState({})

  useEffect(() => {
    const promise = async () => {
      const data = await useAxios()
      return data
    }
    const dataPromise = promise()
    setDataShoes(dataPromise)
  }, [])

  return (
    <DataShoesContext.Provider value={{ dataShoes }}>
      {children}
    </DataShoesContext.Provider>
  )
}
export const useDataShoesContext = () => useContext(DataShoesContext)
