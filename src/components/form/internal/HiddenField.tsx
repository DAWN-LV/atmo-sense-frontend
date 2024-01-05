import { CommonProps } from "@/components/form/types"

type Props = React.HTMLAttributes<HTMLInputElement> & {
  value: any
}

const HiddenField: React.FC<CommonProps & Props> = ({ name, ...props }) => (
  <input type="hidden" name={ name } value={ props.value } />
)

export default HiddenField