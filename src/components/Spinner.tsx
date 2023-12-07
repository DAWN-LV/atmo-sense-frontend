import Icon from "@/components/icon/components/Icon"
import { classNames } from "@/utils"

const Spinner: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({ ...props }) => (
  <Icon { ...props } name="circle_notch" className={ classNames("flex animate-spin", props.className) }/>
)

export default Spinner