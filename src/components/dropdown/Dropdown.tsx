import { useState, cloneElement, useRef } from "react"
import useClickOutside from "@/hooks/useClickOutside"

interface Props {
  parent: React.ReactElement,
  children: React.ReactNode
}

// TODO: Refactor dropdown component

const Wrapper: React.FC<{ children: React.ReactNode, onClose: () => void }> = ({ children, onClose }) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  useClickOutside(wrapperRef, onClose)

  return (
    <div ref={ wrapperRef } className="absolute bottom-0 right-0 translate-y-[calc(100%+0.5rem)] z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
        { children }
      </ul>
    </div>
  )
}

const Dropdown: React.FC<Props> = ({ parent, children }) => {
  const [ isOpen, setIsOpen ] = useState(false)
  const parentElement = cloneElement(parent, { 
    onClick: (event: MouseEvent) => {
      event.stopPropagation()
      setIsOpen(prev => !prev)
    } 
  })

  return (
    <div className="relative flex items-center justify-center">
      { parentElement }
      { isOpen ? (
        <Wrapper children={ children } onClose={ () => setIsOpen(false) }/>
      ) : null}
    </div>
  )
}

export default Dropdown