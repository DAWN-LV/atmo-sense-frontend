import { useState } from "react"
import DropdownMenu from "@/components/dropdown/components/DropdownMenu"
import { classNames } from "@/utils"

type Props = React.HTMLAttributes<HTMLDivElement> & {
  parent: React.ReactElement,
  append?: React.ReactNode,
}

const Dropdown: React.FC<Props> = ({ parent, append, ...props }) => {
  const [ isOpen, setOpen ] = useState(false)

  return (
    <div className={ classNames("relative flex items-center justify-center", props.className) }>
      <div onClick={ () => setOpen(prev => !prev) }>
        { parent }
      </div>
      { isOpen ? (
        <DropdownMenu append={ append } onClose={ () => setOpen(prev => !prev) }>
          { props.children }
        </DropdownMenu>
      ) : null }
    </div>
  )
}

export default Dropdown