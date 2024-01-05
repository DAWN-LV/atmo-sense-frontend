import Button from "@/components/Button"
import { useAlert } from "@/providers"
import { classNames } from "@/utils"

type Props = React.HTMLAttributes<HTMLSpanElement> & {
  title?: string,
  label: string
}

const Clipboard: React.FC<Props> = ({ title, label, ...props }) => {
  const alert = useAlert()

  const handleCopy = () => {
    navigator.clipboard.writeText(label).then(() => {
      alert.add({
        category: "success",
        content: "Text has been successfully copied to clipboard."
      })
    })
  }

  return (
    <div { ...props } className={ classNames("flex items-center space-x-2", props.className) }>
      { title ? (
        <span className="whitespace-nowrap">{ title }</span>
      ) : null }
      <span className="text-black dark:text-white font-semibold">{ label }</span>
      <Button variant="primary" icon="clipboard" onClick={ handleCopy }/>
    </div>
  )
}

export default Clipboard