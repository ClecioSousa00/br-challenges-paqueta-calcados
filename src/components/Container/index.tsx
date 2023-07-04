import { ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
}

export const Container = ({ children }: ContainerProps) => {
  return <div className="px-20">{children}</div>
}
