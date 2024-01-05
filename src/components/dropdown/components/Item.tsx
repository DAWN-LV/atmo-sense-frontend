import { classNames } from "@/utils"
import Icon, { IconName } from "@/components/icon"

type Props = React.HTMLAttributes<HTMLDivElement> & {
  icon?: IconName
}

export const Item: React.FC<Props> = ({ ...props }) => (
  <div { ...props } className={ classNames("flex items-center justify-between min-w-[10rem] px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer", props.className) }>
    { props.children }
    { props.icon ? (
      <Icon name={ props.icon }/>
    ) : null }
  </div>
)

export default Item