import { useState } from "react"
import { useFormContext } from 'react-hook-form'
import Label from "@/components/form/components/Label"
import Icon from "@/components/icon/Icon"

interface Props {
  label?: string
  name: string
  placeholder?: string
}

const PasswordField: React.FC<Props> = ({ name, label, placeholder }) => {
  const [ flag, setFlag ] = useState(false)
  const { register } = useFormContext()

  return (
    <div className="mb-4">
      <Label label={ label }/>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          { ...register(name) }
          type={ flag ? 'text' : 'password' }
          id={ name }
          placeholder={ placeholder }
          className="block w-full pr-10 px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer" onClick={ () => setFlag((prev) => !prev) }>
          <Icon name={ flag ? "eye_slash" : "eye" }/>
        </div>
      </div>
    </div>
  )
}

export default PasswordField