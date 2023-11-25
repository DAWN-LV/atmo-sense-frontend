import { useMemo } from "react"
import Icon from "@/components/icon/Icon"
import Spinner from "@/components/Spinner"
import { IconName } from "@/components/icon"

interface Props {
  type?: 'button' | 'submit',
  variant?: 'primary',
  label?: string,
  icon?: IconName,
  flat?: boolean,
  loading?: boolean,
  onClick?: () => void
}

const Button: React.FC<Props> = ({ type = "button", label, icon, loading, variant, flat = true, onClick }) => {
  const variantClass = useMemo(() => {
    switch (variant) {
      case "primary": return `bg-blue-600 text-white hover:bg-blue-700 border-gray-700`
      default: return "hover:opacity-60"
    }
  }, [ variant ])

  return (
    <button 
      type={ type } 
      className={ `flex items-center w-full gap-x-2 justify-center px-4 py-2 rounded-md shadow-sm transition ease-in-out duration-150 ${ !flat && "border" } ${ variantClass }` }
      onClick={ onClick }  
    >
      { loading && <Spinner/> }
      { icon && <Icon name={ icon }/> }
      { label && <span className="font-semibold flex-grow truncate">{ label }</span> }
    </button>
  )
}

export default Button