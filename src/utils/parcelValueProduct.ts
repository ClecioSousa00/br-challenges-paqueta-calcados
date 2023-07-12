export const parcelValue = (value: number) => {
  const formattedValue = value / 10
  const newFormattedValue = formattedValue
    .toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    .replace('.', ',')
  return newFormattedValue
}
