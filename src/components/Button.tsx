import Spinner from "@/components/Spinner"
import Icon, { IconName } from "@/components/icon"
import { classNames } from "@/utils"

export type ButtonVariant = "primary" | "negative" | "light" | "default"

type Props = React.HTMLAttributes<HTMLSpanElement> & {
  type?: "button" | "submit",
  variant?: ButtonVariant,
  label?: string,
  icon?: IconName,
  loading?: boolean,
  onClick?: () => void
}

const variantClass: Record<ButtonVariant, string> = {
  "light": "bg-white text-black hover:bg-white-700 border-white-700",
  "negative": "bg-red-600 text-white hover:bg-red-700 border-gray-700",
  "primary": "bg-blue-600 text-white hover:bg-blue-700 border-gray-700",
  "default": "hover:opacity-60"
}

const Button: React.FC<Props> = ({ type = "button", variant = "default", label, icon, loading, onClick, ...props }) => (
  <button 
    type={ type } 
    className={ classNames("flex items-center w-full gap-x-2 justify-center p-2 rounded-md shadow-sm transition ease-in-out duration-150", variantClass[variant], props.className) }
    onClick={ onClick }  
  >
    { loading ? <Spinner/> : null }

    { icon ? <Icon name={ icon }/> : null }

    { label ? (
      <span className="font-semibold flex-grow truncate mx-2">{ label }</span>
    ) : null }
  </button>
)

export default Button