'use client'
type ButtonGenericProps = {
  text: string
  addItemToCart?: () => void
}

export const ButtonGeneric = ({ text, addItemToCart }: ButtonGenericProps) => {
  return (
    <button
      className="w-80 rounded bg-primary-3 py-2 text-lg uppercase"
      onClick={() => {}}
    >
      {text}
    </button>
  )
}
