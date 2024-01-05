import { classNames } from "@/utils"
import { useCallback, useState } from "react"

interface Option {
  label: string
  value: number
}

type Props = {
  options: Option[],
  initialValue?: Option,
  onSelect: (option: Option) => void
}

const ButtonGroup: React.FC<Props> = ({ options, initialValue, onSelect }) => {
  const initial = initialValue ?? options[0]
  const [ current, setCurrent ] = useState(initial)

  const handleSelect = useCallback(
    (option: Option) => {
      setCurrent(option)
      onSelect(option)
    },
    [ onSelect ]
  )

  return (
    <div className={ classNames("inline-flex rounded-md shadow-sm") }>
			{options.map((option, index) => (
				<button 
          key={ `${option.value}-${index}` }
          type="button" 
          className={
            classNames(
              "px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white",
              index === 0 ? "rounded-l-lg" : index === options.length - 1 ? "rounded-r-lg" : "",
              current === option ? "!border-blue-700 !border-2" : ""
            )
          }
          onClick={ () => handleSelect(option) }
        >
					{ option.label }
				</button>
			))}
		</div>
  )
}

export default ButtonGroup