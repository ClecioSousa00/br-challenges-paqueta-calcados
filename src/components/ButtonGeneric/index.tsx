type ButtonGenericProps = {
  text: string
}

export const ButtonGeneric = ({ text }: ButtonGenericProps) => {
  return (
    <button className="w-80 rounded bg-primary-3 py-2 text-lg uppercase">
      {text}
    </button>
  )
}
