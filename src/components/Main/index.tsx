import { FootwearSection } from '@/components/Main/FootwearSection'
import { Hero } from '@/components/Main/Hero'
import { InfosBar } from '@/components/Main/InfosBar'
import footwearWoman from '@/assets/calcados-femininos.png'
import footwearMan from '@/assets/calcados-masculinos.png'
import { BarLine } from '../BarLine'
import { Container } from '../Container'
import { OutletSection } from './OutletSection'

export const Main = () => {
  return (
    <main className="">
      <Hero />
      <InfosBar />
      <Container>
        <FootwearSection img={footwearWoman} text="femininos">
          <p className="text-right text-[1.375rem] leading-9 text-secondary">
            Escolher o seu sapato favorito entre nossa
            <strong> variedade de modelos e cores</strong> não será uma tarefa
            fácil, mas o que uma mulher não consegue fazer?{' '}
          </p>
        </FootwearSection>
        <FootwearSection img={footwearMan} text="masculino">
          <p className="text-left text-[1.375rem] leading-9 text-secondary">
            Tenha em seu guarda roupa sapatos de qualidade e confortáveis, para
            o dia a dia, trabalho e até mesmo para praticar esportes!
          </p>
        </FootwearSection>
        <BarLine />
        <OutletSection />
      </Container>
    </main>
  )
}
