export const CalculateProductDiscount = (price: number, discount: number) => {
  const discountValue = price * discount
  const newDiscountPrice = price - discountValue

  return newDiscountPrice
}
