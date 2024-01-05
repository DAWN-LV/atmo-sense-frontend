import { classNames } from "@/utils"

type Props = React.HTMLAttributes<HTMLLabelElement>

const Label: React.FC<Props> = ({ children, ...props }) => (
  <label { ...props } className={ classNames("block mb-2 text-sm font-medium text-gray-900 dark:text-white", props.className) }>{ children }</label>
)

export default Label