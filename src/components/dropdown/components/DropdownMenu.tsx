import useClickOutside from "@/hooks/useClickOutside"

interface Props {
  append: React.ReactNode, 
  children: React.ReactNode,
  onClose: () => void
}

const DropdownMenu: React.FC<Props> = ({ append, children, onClose }) => {
  const { ref, onClickCapture } = useClickOutside(onClose)

  return (
    <div 
      ref={ ref } 
      className="absolute bottom-0 right-0 translate-y-[calc(100%+0.5rem)] z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
      onClickCapture={ onClickCapture } 
    >
      { append }
      <div className="py-2 text-sm text-gray-700 dark:text-gray-200">
        { children }
      </div>
    </div>
  )
}

export default DropdownMenu