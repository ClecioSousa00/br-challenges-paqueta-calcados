import { LuHeadphones, LuMapPin } from 'react-icons/lu'
export const BarHeader = () => {
  return (
    <div className="flex justify-between bg-gradientBar px-60 pb-3 pt-5 ">
      <p className="text-sm font-normal">Loja de Calçados e Moda Online</p>
      <div className="flex gap-14">
        <div className="flex items-center gap-2">
          {' '}
          <LuHeadphones size={18} />{' '}
          <span className="text-sm font-medium">Fale conosco</span>
        </div>
        <div className="flex items-center gap-2">
          {' '}
          <LuMapPin size={18} />{' '}
          <span className="text-sm font-medium">Encontrar uma loja física</span>
        </div>
      </div>
    </div>
  )
}
