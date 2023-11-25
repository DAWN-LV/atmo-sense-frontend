import React from 'react'
import Label from '@/components/form/components/Label'
import { useFormContext } from 'react-hook-form'

interface Props {
  label?: string
  name?: string
  placeholder?: string
}

const TextField: React.FC<Props> = ({ name, label, placeholder }) => {
  const { register } = useFormContext()

  return (
    <div className="mb-4">
      <Label label={ label }/>
      <input
        { ...(name ? register(name) : {}) }
        type="text"
        placeholder={ placeholder }
        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
  )
}

export default TextField