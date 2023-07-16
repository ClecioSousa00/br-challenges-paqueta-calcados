import { Container } from '@/components/Container'
import { ProductsBag } from '@/components/PageBag/ProductsBag'
import Link from 'next/link'

export default function bag() {
  return (
    <main>
      <Container>
        <Link
          className="mt-10 inline-block font-alt text-base text-secondary-2"
          href={'/'}
        >
          Paquetá &gt;{' '}
        </Link>
        <span className="inline-block border-b-2 border-b-primary font-alt text-base text-secondary">
          Sacola
        </span>
        <ProductsBag />
      </Container>
    </main>
  )
}
