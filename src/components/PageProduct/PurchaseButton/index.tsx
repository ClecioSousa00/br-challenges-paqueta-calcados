type PurchaseButtonProps = {
  type: boolean
  handlePurchaseProduct: () => void
}

export const PurchaseButton = ({
  type,
  handlePurchaseProduct,
}: PurchaseButtonProps) => {
  const handleClick = () => {
    if (!type) handlePurchaseProduct()
  }
  return (
    <button
      onClick={handleClick}
      className={`inline-block w-full rounded  px-2 py-2 text-center text-base uppercase ${
        type ? 'bg-primary-2' : 'bg-primary-3'
      }`}
    >
      {type ? 'Me avise quando chegar' : 'Comprar'}
    </button>
  )
}
