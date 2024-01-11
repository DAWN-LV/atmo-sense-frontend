import { classNames } from "@/utils"

export type IndicatorType = "success" | "warning" | "error"

type Props = React.HTMLAttributes<HTMLSpanElement> & {
  type: IndicatorType
}

const colors: Record<IndicatorType, string> = {
  "success": "bg-green-400",
  "warning": "bg-orange-400",
  "error": "bg-red-400"
}

const Indicator: React.FC<Props> = ({ ...props }) => {


  return (
    <span { ...props } className={ classNames("relative flex h-3 w-3", props.className) }>
      <span className={ classNames("animate-ping absolute inline-flex h-full w-full rounded-full opacity-75", colors[props.type]) }></span>
      <span className={ classNames("relative inline-flex rounded-full h-3 w-3", colors[props.type]) }></span>
    </span>
  )
}

export default Indicator