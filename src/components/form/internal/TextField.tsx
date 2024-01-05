import Label from '@/components/form/components/Label'
import { classNames } from '@/utils'
import { CommonProps } from '@/components/form/types'

type Props = React.HTMLAttributes<HTMLInputElement> & {
  onChange?: (data: any) => void
}

const TextField: React.FC<CommonProps & Props> = ({ onChange, ...props }) => (
  <div className={ classNames("mb-4", props.className) }>
    { props.label ? (
      <Label children={ props.label }/>
    ) : null }
    <input
      { ...props }
      type="text"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      onChange={ onChange }
    />
  </div>
)

export default TextField