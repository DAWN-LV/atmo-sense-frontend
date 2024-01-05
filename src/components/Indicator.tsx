import { classNames } from "@/utils"

type Props = React.HTMLAttributes<HTMLSpanElement>

const Indicator: React.FC<Props> = ({ ...props }) => (
  <span { ...props } className={ classNames("relative flex h-3 w-3", props.className) }>
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
  </span>
)

export default Indicator