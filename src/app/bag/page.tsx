import { BackButton } from '@/components/BackButton'
import { Container } from '@/components/Container'
import { ProductsBag } from '@/components/PageBag/ProductsBag'
import { Suspense } from 'react'
import LoadingBag from './loading'
// import Link from 'next/link'

export default function bag() {
  return (
    <main className="mt-32">
      <Container>
        <BackButton />
        {/* <Link
          className="mt-10 inline-block font-alt text-base text-secondary-2"
          href={'/'}
        >
          Paquetá &gt;{' '}
        </Link>
        <span className="inline-block border-b-2 border-b-primary font-alt text-base text-secondary">
          Sacola
        </span> */}
        <Suspense fallback={<LoadingBag />}>
          <ProductsBag />
        </Suspense>
      </Container>
    </main>
  )
}
