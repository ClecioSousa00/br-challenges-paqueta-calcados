import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { NavBar } from '@/components/Header/NavBar'
import { Main } from '@/components/Main'

export default function Home() {
  return (
    <>
      <Container>
        <NavBar />
      </Container>
      <Main />
      <Footer />
    </>
  )
}
