'use client'
type CardButtonProps = {
  type: boolean
  addItemToCart?: () => void
}

export const CardButton = ({ type, addItemToCart }: CardButtonProps) => {
  return (
    <button
      className={`w-50 rounded  px-2 py-2 text-base uppercase ${
        type === true ? 'bg-primary-2' : 'bg-primary-3'
      }`}
      onClick={addItemToCart}
    >
      {type === false ? 'Comprar' : 'Me avise quando chegar'}
    </button>
  )
}
