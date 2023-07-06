import Image from 'next/image'
import logoAdidas from '@/assets/logos/adidas.png'
import logoBebece from '@/assets/logos/bebece.png'
import logoDumond from '@/assets/logos/dumond.png'
import logoViaMarte from '@/assets/logos/via-marte.png'

export const Brands = () => {
  return (
    <div>
      <h2 className="font-alt text-3xl font-semibold uppercase text-dark">
        As melhores marcas estão aqu!
      </h2>
      <div className="mt-20 flex items-baseline justify-between">
        <Image src={logoAdidas} alt="Logo da adidas" />
        <Image src={logoBebece} alt="Logo da Bebece" />
        <Image src={logoDumond} alt="Logo da Dumond" />
        <Image src={logoViaMarte} alt="Logo da Via Marte" />
      </div>
    </div>
  )
}
