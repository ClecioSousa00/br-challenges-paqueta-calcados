import { LuShoppingBag } from 'react-icons/lu'

export const BagIcon = () => {
  return (
    <>
      <div className="relative">
        {/* {bagValue && (
          <span className="absolute -right-1 -top-2 h-5 w-5 rounded-full bg-gradientBar pt-1 text-center text-xs text-white">
            {bagValue}
          </span>
        )} */}
        <LuShoppingBag size={26} />
      </div>
      <span className="text-sm font-normal">Sacola</span>
    </>
  )
}
