import { useRef } from "react"
import ReactDOM from "react-dom"

const Head: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const headRoot = useRef(document.head)
  return ReactDOM.createPortal(children, headRoot.current)
}

export default Head