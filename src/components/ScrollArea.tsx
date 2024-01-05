import { classNames } from "@/utils"

type Props = React.HTMLAttributes<HTMLDivElement>

const ScrollArea: React.FC<Props> = ({ children, ...props }) => (
  <div { ...props } className={ classNames("overflow-y-auto", props.className) }>{ children }</div>
)

export default ScrollArea