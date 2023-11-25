import React from "react"
import { IconName, icons } from "@/components/icon"

const Icon: React.FC<{ name: IconName }> = ({ name }) => (
  <span 
    className="inline-flex items-center aspect-square w-4 h-4"
    dangerouslySetInnerHTML={{ __html: icons[name] }}
  />
)

export default Icon