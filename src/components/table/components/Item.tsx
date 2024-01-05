import { classNames } from "@/utils"

type Props = React.HTMLAttributes<HTMLTableElement>

const Item: React.FC<Props> = ({ ...props }) => (
  <tr className={ classNames("bg-white border-b dark:bg-gray-900 dark:border-gray-700", props.className) }>
    { props.children }
  </tr>
)

export default Item