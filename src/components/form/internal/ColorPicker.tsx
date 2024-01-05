import Label from '@/components/form/components/Label'
import { classNames } from "@/utils"
import { CommonProps } from "@/components/form/types"

type Props = React.HTMLAttributes<HTMLInputElement> & {
  initialColor?: string
  onChange?: (data: string) => void
}

const ColorPicker: React.FC<CommonProps & Props> = ({ initialColor = '#000000', onChange, ...props }) => (
  <div className={ classNames("flex items-center space-x-2", props.className) }>
    <div className="w-8 h-8 flex items-center border border-gray-300 dark:border-gray-600 justify-center overflow-hidden rounded-full">
      <input 
        { ...props }
        type="color" 
        onChange={ onChange }
        className="w-full h-full cursor-pointer rounded-full scale-150" 
      />
    </div>
    { props.label ? (
      <Label children={ props.label } className="!my-0"/>
    ) : null }
  </div>
)

export default ColorPicker