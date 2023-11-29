import useClickOutside from "@/hooks/useClickOutside"

interface Props {
  children: React.ReactNode,
  onClose: () => void
}

const Dialog: React.FC<Props> = ({ children, onClose }) => {
  const { ref, onClickCapture } = useClickOutside(onClose)

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center w-full h-full md:inset-0 bg-black/30">
      <div ref={ ref } onClickCapture={ onClickCapture } className="relative p-4 w-full max-w-2xl max-h-full">
        { children }
      </div>
    </div>
  )
}

export default Dialog