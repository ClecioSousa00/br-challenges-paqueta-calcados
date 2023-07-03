import { FootwearSection } from '@/components/FootwearSection'
import { Hero } from '@/components/Hero'
import { InfosBar } from '@/components/InfosBar'
import footwearWoman from '@/assets/calcados-femininos.png'
import footwearMan from '@/assets/calcados-masculinos.png'

export const Main = () => {
  return (
    <main>
      <Hero />
      <InfosBar />
      <FootwearSection img={footwearWoman} text="femininos">
        <p className="text-right text-[1.375rem] leading-9 text-secondary">
          Escolher o seu sapato favorito entre nossa
          <strong> variedade de modelos e cores</strong> não será uma tarefa
          fácil, mas o que uma mulher não consegue fazer?{' '}
        </p>
      </FootwearSection>
      <FootwearSection img={footwearMan} text="masculino">
        <p className="text-left text-[1.375rem] leading-9 text-secondary">
          Tenha em seu guarda roupa sapatos de qualidade e confortáveis, para o
          dia a dia, trabalho e até mesmo para praticar esportes!
        </p>
      </FootwearSection>
    </main>
  )
}
