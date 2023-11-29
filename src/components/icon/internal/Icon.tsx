import React from "react"
import { IconName, icons } from "@/components/icon"

type Props = React.HTMLAttributes<HTMLSpanElement> & {
  name: IconName
}

const Icon: React.FC<Props> = ({ name, ...props }) => (
  <span 
    { ...props }
    className={ `inline-flex items-center justify-center aspect-square w-4 h-4 ${ props.className }` }
    dangerouslySetInnerHTML={{ __html: icons[name] }}
  />
)

export default Icon