import { useState } from "react"
import Label from "@/components/form/components/Label"
import Icon from "@/components/icon"
import { CommonProps } from "@/components/form/types"

const PasswordField: React.FC<CommonProps> = ({ name, label, placeholder }) => {
  const [ flag, setFlag ] = useState(false)

  return (
    <div className="mb-4">
      <Label children={ label }/>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          type={ flag ? 'text' : 'password' }
          name={ name }
          placeholder={ placeholder }
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer" onClick={ () => setFlag((prev) => !prev) }>
          <Icon name={ flag ? "eye_slash" : "eye" }/>
        </div>
      </div>
    </div>
  )
}

export default PasswordField