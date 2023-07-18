'use client'

import Link from 'next/link'

type CardButtonProps = {
  type: boolean
  id: string
}

export const CardButton = ({ type, id }: CardButtonProps) => {
  return (
    <Link
      href={`/product/${id}`}
      className={`inline-block w-full rounded  px-2 py-2 text-center text-base uppercase transition-all hover:scale-105
      ${type ? 'bg-primary-2' : 'bg-primary-3'}`}
    >
      {type ? 'Me avise quando chegar' : 'Comprar'}
    </Link>
  )
}
