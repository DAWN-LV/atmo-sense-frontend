import { useEffect, useMemo } from "react"
import { useNotification } from "@/store/notification/provider"
import NotificationModel from "@/store/notification/NotificationModel"
import Notification from "@/components/notification/Notification"
import { observer } from "mobx-react-lite"

const Dismissible: React.FC<{ notification: NotificationModel }> = ({ notification }) => {
  useEffect(() => {
    const timeout = setTimeout(() => notification.dismiss(), notification.timeout)
    return () => clearTimeout(timeout) 
  }, [notification])

  return (
    <Notification notification={ notification } onClose={ () => notification.dismiss() }/>
  )
}

const Notifications: React.FC = () => {
  const notifications = useNotification()

  const sliced = useMemo(() => notifications.active.slice(0, 4), [notifications.active])

  return (
    <div className="fixed bottom-2 right-5 w-80 z-50">
      {sliced.map(notification => (
        <Dismissible key={ notification.message } notification={ notification }/>
      ))}
    </div>
  )
}

export default observer(Notifications) 