import React, { ReactNode, FormEvent, useEffect, useRef } from "react"

interface Props<T> extends Omit<React.HTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  children: ReactNode
  initialValues?: T
  onSubmit?: (data: T) => void
}

const Form = <T extends Record<string, any>>({ children, initialValues, onSubmit, ...props }: Props<T>) => {
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (initialValues && formRef.current) {
      Object.entries(initialValues).forEach(([ key, value ]) => {
        const formElement = formRef.current?.elements.namedItem(key) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        if (formElement) {
          formElement.value = value as string
        }
      })
    }
  }, [ initialValues ])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (onSubmit) {
      const formData = new FormData(event.currentTarget)
      const data = Object.fromEntries(formData.entries()) as T
      onSubmit(data)
    }
  }

  return (
    <form ref={ formRef } onSubmit={ handleSubmit } { ...props }>
      { children }
    </form>
  )
}

export default Form