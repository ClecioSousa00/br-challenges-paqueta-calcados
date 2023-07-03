import Image, { StaticImageData } from 'next/image'
import { ButtonGeneric } from '../ButtonGeneric'
import { ReactNode } from 'react'

type FootwearSectionProps = {
  children: ReactNode
  text: 'femininos' | 'masculino'
  img: StaticImageData
}

export const FootwearSection = ({
  children,
  text,
  img,
}: FootwearSectionProps) => {
  return (
    <section
      className={`mt-14 flex items-center justify-between px-20 ${
        text === 'masculino' ? 'flex-row-reverse' : ''
      }`}
    >
      <div className="relative w-[420px]">
        <Image
          className="h-full w-full"
          src={img}
          alt="Pessoa usando sapato do Paquetá calçados"
        />
        <p
          className={`absolute bottom-8 max-w-[270px] text-3xl uppercase ${
            text === 'masculino' ? 'right-7 text-right' : 'left-7  '
          }`}
        >
          Calçados {text}
        </p>
      </div>
      <div className="flex max-w-xl flex-col">
        {children}
        <div
          className={`sef mt-12  ${
            text === 'masculino' ? 'self-start' : 'self-end'
          }`}
        >
          <ButtonGeneric text="Conferir" />
        </div>
      </div>
    </section>
  )
}
