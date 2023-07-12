type PurchaseButtonProps = {
  type: boolean
  // handlePurchaseProduct: () => void
}

export const PurchaseButton = ({ type }: PurchaseButtonProps) => {
  return (
    <button
      className={`inline-block w-full rounded  px-2 py-2 text-center text-base uppercase ${
        type === true ? 'bg-primary-2' : 'bg-primary-3'
      }`}
    >
      {type ? 'Me avise quando chegar' : 'Comprar'}
    </button>
  )
}
