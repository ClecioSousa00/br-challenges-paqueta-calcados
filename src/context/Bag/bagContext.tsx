import { ReactNode, createContext, useContext, useState } from 'react'

const BagContext = createContext({})

export const BagProvider = ({ children }: { children: ReactNode }) => {
  const [bagValue, setBagValue] = useState(0)

  return (
    <BagContext.Provider value={{ bagValue, setBagValue }}>
      {children}
    </BagContext.Provider>
  )
}
export const useBageContext = () => useContext(BagContext)
