import React from "react"
import { IconName, icons } from "@/components/icon"

interface Props {
  name: IconName
}

const Icon: React.FC<Props> = ({ name }) => {
  return (
    <span 
      className="inline-flex items-center aspect-square w-4 h-4"
      dangerouslySetInnerHTML={{ __html: icons[name] }}
    />
  )
}

export default Icon