import { ReactNode } from 'react'

type ItemsInfosBarProps = {
  children: ReactNode
}
export const ItemsInfosBar = ({ children }: ItemsInfosBarProps) => {
  return (
    <div className="flex max-w-[210px] items-center gap-4 text-sm">
      {children}
    </div>
  )
}
