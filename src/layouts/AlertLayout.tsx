import { useEffect, useMemo } from "react"
import { observer } from "mobx-react-lite"
import { useAlert } from "@/providers"
import AlertModel from "@/store/alerts/AlertModel"
import Alert from "@/components/Alert"

const Dismissible: React.FC<{ alert: AlertModel }> = ({ alert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => alert.dismiss(), alert.timeout)
    return () => clearTimeout(timeout) 
  }, [ alert ])

  return (
    <Alert alert={ alert } onClose={ () => alert.dismiss() }/>
  )
}

const AlertLayout: React.FC = () => {
  const alert = useAlert()
  const sliced = useMemo(() => alert.active.slice(0, 4), [ alert.active ])

  return (
    <>
      { sliced.length ? (
        <div className="fixed right-0 w-fit flex flex-col items-end p-5 z-alert">
          {sliced.map((alert, index) => (
            <Dismissible key={ `${index}_${alert.content}` } alert={ alert }/>
          ))}
        </div>
      ) : null }
    </>
  )
}

export default observer(AlertLayout) 