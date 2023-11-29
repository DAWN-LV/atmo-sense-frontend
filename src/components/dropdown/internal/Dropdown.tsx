import { useState, cloneElement, useCallback } from "react"
import DropdownMenu from "@/components/dropdown/internal/DropdownMenu"

interface Props {
  parent: React.ReactElement,
  children: React.ReactNode,
  append?: React.ReactNode,
}

const Dropdown: React.FC<Props> = ({ parent, append, children }) => {
  const [ isOpen, setOpen ] = useState(false)

  const toggleDropdown = useCallback(() => setOpen(prev => !prev), [])
  const parentWithClick = cloneElement(parent, { onClick: toggleDropdown })

  return (
    <div className="relative flex items-center justify-center">
      { parentWithClick }
      { isOpen ? (
        <DropdownMenu append={ append } onClose={ toggleDropdown }>
          { children }
        </DropdownMenu>
      ) : null }
    </div>
  )
}

export default Dropdown