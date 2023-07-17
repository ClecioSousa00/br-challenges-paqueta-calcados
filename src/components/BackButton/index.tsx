'use client'
import { useRouter } from 'next/navigation'

export const BackButton = ({ text = 'Paquetá', routeName = 'Sacola' }) => {
  const route = useRouter()
  return (
    <>
      <button
        className="mt-10 font-alt text-base text-secondary-2"
        onClick={() => route.back()}
      >
        {text} &gt;
      </button>
      <span className="ml-2 inline-block border-b-2 border-b-primary font-alt text-base text-secondary">
        {routeName}
      </span>
    </>
  )
}
/* <Link
          className="mt-10 inline-block font-alt text-base text-secondary-2"
          href={'/'}
        >
          Paquetá &gt;{' '}
        </Link>
        <span className="inline-block border-b-2 border-b-primary font-alt text-base text-secondary">
          Sacola
        </span> */
