import { Container } from '../Container'
import { Form } from '../Form'
import { Arrow } from '../icons/Arrow'

export const NewsSection = () => {
  return (
    <section className="mt-36 bg-gradientBar py-14">
      <Container>
        <div className="flex items-center justify-between">
          <p className="max-w-[420px] font-alt text-3xl font-bold uppercase">
            Seja o primeiro a receber nossas ofertas e novidades exclusivas!
          </p>

          <Arrow />

          <Form />
        </div>
      </Container>
    </section>
  )
}
