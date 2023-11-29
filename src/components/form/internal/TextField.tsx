import React, { useEffect } from 'react'
import Label from '@/components/form/components/Label'
import { useFormContext } from 'react-hook-form'
import { CommonProps } from '@/components/form/types'
import Error from '@/components/form/internal/Error'

const TextField: React.FC<CommonProps> = ({ name, label, placeholder, validates }) => {
  const { register, formState: { errors } } = useFormContext()

  useEffect(() => console.log(errors), [ errors ])

  return (
    <div className="mb-4">
      <Label label={ label }/>
      <input
        { ...(name ? register(name, validates) : {}) }
        type="text"
        placeholder={ placeholder }
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <Error error={ errors[name]?.message as string }/>
    </div>
  )
}

export default TextField