'use client'
type ButtonGenericProps = {
  text: string
  addItemToCart?: () => void
}

export const ButtonGeneric = ({ text, addItemToCart }: ButtonGenericProps) => {
  return (
    <button
      className="rounded bg-primary-3 px-20 py-2 text-lg uppercase"
      onClick={() => {}}
    >
      {text}
    </button>
  )
}
