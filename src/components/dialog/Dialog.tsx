import { useRef } from "react"

interface Props {
  children: React.ReactNode,
  closeDialog: () => void
}

const Dialog: React.FC<Props> = ({ children, closeDialog }) => {
  const dialogRef = useRef(null)

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === dialogRef.current) {
      closeDialog()
    }
  }

  return (
    <div 
      ref={ dialogRef }
      className="fixed inset-0 z-50 flex justify-center items-center w-full h-full md:inset-0 bg-black/30"
      onClick={ handleClick }
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        { children }
      </div>
    </div>
  )
}

export default Dialog