import { useState } from "react"
import DropdownMenu from "@/components/dropdown/components/DropdownMenu"

interface Props {
  parent: React.ReactElement,
  children: React.ReactNode,
  append?: React.ReactNode,
}

const Dropdown: React.FC<Props> = ({ parent, append, children }) => {
  const [ isOpen, setOpen ] = useState(false)

  return (
    <div className="relative flex items-center justify-center">
      <div onClick={ () => setOpen(prev => !prev) }>
        { parent }
      </div>
      { isOpen ? (
        <DropdownMenu append={ append } onClose={ () => setOpen(prev => !prev) }>
          { children }
        </DropdownMenu>
      ) : null }
    </div>
  )
}

export default Dropdown