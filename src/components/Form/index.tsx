interface FormProps {
  placeholder: string
  variant?: boolean // altera a configurração(style) do botão
}

export function Form({ placeholder }: FormProps) {
  return (
    <input type="text" className="w-full h-14 p-4" placeholder={placeholder} />
  )
}
