import Image from 'next/image'
import logoPaqueta from '@/assets/logos/logo (1).png'
import { NumberingContainer } from '../NemberingContainer'
export const OutletSection = () => {
  return (
    <>
      <div className="mb-12 mt-14 flex w-full items-center justify-between">
        <div>
          <Image
            className="w-60"
            src={logoPaqueta}
            alt="Logo Da Paquetá Calçados"
          />
          <h3 className="text-right text-5xl font-bold text-primary-3 ">
            Outlet
          </h3>
        </div>
        <p className="max-w-md text-right leading-7 text-[1.375] text-secondary">
          Você também pode escolher o seu novo sapato favorito de acordo com a
          sua numeração.
        </p>
      </div>
      <div>
        <NumberingContainer />
      </div>
    </>
  )
}
