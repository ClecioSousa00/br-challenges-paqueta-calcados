import { Container } from '@/components/Container'

import { ContainerProduct } from '@/components/PageProduct/ContainerProduct'
import { ListProducts } from '@/components/PageProduct/ListProducts'
import { Suspense } from 'react'
import LoadingPage from './loading'

type ParamsProps = {
  params: {
    productId: string
  }
}

export default function Product({ params }: ParamsProps) {
  return (
    <Container>
      <Suspense fallback={<LoadingPage />}>
        <ContainerProduct idProduct={params.productId} />
      </Suspense>
      <div className="mt-20 pb-10">
        <h2 className="mb-5 font-alt text-3xl font-semibold uppercase text-dark">
          talvez possa lhe interessar
        </h2>
        <ListProducts />
      </div>
    </Container>
  )
}
