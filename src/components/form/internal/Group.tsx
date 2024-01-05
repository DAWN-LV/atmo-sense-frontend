import { classNames } from "@/utils"

type Props = React.HTMLAttributes<HTMLFieldSetElement>

const Group: React.FC<Props> = ({ ...props }) => {
  return (
    <fieldset { ...props } className={ classNames("mb-4 p-4 rounded-lg border border-gray-300 dark:border-gray-600", props.className) }>
      <legend className="text-lg font-semibold">{ props.title }</legend>
      { props.children }
    </fieldset>
  )
}

export default Group