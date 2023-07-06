import { InputHTMLAttributes, ReactNode } from 'react'

type FormInputProps = InputHTMLAttributes<HTMLInputElement> & {
  children: ReactNode
}

export const FormInput = ({ children, ...props }: FormInputProps) => {
  return (
    <div className="flex w-64 items-center gap-4 border-b-[1px] border-b-white">
      {children}
      <input
        className="bg-transparent outline-none placeholder:tracking-wider placeholder:text-white placeholder:opacity-60"
        {...props}
      ></input>
    </div>
  )
}
