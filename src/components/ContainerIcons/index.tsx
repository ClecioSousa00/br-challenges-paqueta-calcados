import { useLocalStorage } from '@/hooks/useLocaStorage'
import { ReactNode } from 'react'

type ContainerIconProps = {
  children: ReactNode
}
export const ContainerIcons = ({ children }: ContainerIconProps) => {
  return (
    <div className="flex items-center gap-2 text-[#383838]">{children}</div>
  )
}
