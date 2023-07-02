import { ButtonGeneric } from '../ButtonGeneric'

export const Hero = () => {
  return (
    <section className="flex h-[500px] items-center justify-end bg-heroBackground bg-cover bg-right bg-no-repeat">
      <div className="pr-20">
        <h2 className="text-7xl font-semibold text-secondary">Tênis Casual</h2>
        <p className="text-6xl font-normal text-primary-2">Masculino</p>
        <div>
          <span className="mt-8 inline-block text-2xl font-medium text-secondary-2">
            A partir de
          </span>
          <p className="mb-9 text-5xl font-bold text-secondary">
            <strong>R$ 79,99</strong>
          </p>
          <ButtonGeneric text="Aproveite" />
        </div>
      </div>
    </section>
  )
}
