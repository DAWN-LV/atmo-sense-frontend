import { useEffect, useMemo } from "react"
import NotificationModel from "@/store/notification/NotificationModel"
import { observer } from "mobx-react-lite"
import Notification from "@/components/Notification"
import { useNotification } from "@/providers"

const Dismissible: React.FC<{ notification: NotificationModel }> = ({ notification }) => {
  useEffect(() => {
    const timeout = setTimeout(() => notification.dismiss(), notification.timeout)
    return () => clearTimeout(timeout) 
  }, [ notification ])

  return (
    <Notification notification={ notification } onClose={ () => notification.dismiss() }/>
  )
}

const Notifications: React.FC = () => {
  const notifications = useNotification()
  const sliced = useMemo(() => notifications.active.slice(0, 4), [notifications.active])

  return (
    <>
      { sliced.length ? (
        <div className="fixed right-0 w-fit flex flex-col items-end p-5 z-notification">
          {sliced.map((notification) => (
            <Dismissible key={ notification.message } notification={ notification }/>
          ))}
        </div>
      ) : null }
    </>
  )
}

export default observer(Notifications) 