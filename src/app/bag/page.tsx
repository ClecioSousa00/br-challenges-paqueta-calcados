import { BackButton } from '@/components/BackButton'
import { Container } from '@/components/Container'
import { ProductsBag } from '@/components/PageBag/ProductsBag'
import { Suspense } from 'react'
import LoadingBag from './loading'

export default function bag() {
  return (
    <main>
      <Container>
        <BackButton />
        <Suspense fallback={<LoadingBag />}>
          <ProductsBag />
        </Suspense>
      </Container>
    </main>
  )
}
