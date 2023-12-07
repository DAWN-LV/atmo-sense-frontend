import { classNames } from "@/utils"
import Icon, { IconName } from "@/components/icon"

type Props = React.HTMLAttributes<HTMLDivElement> & {
  label: string,
  icon?: IconName
}

export const Item: React.FC<Props> = ({ ...props }) => (
  <div { ...props } className={ classNames("flex items-center justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer", props.className) }>
    { props.label }
    { props.icon ? (
      <Icon name={ props.icon }/>
    ) : null }
  </div>
)

export default Item