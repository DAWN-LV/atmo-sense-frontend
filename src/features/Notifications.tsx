import Button from "@/components/Button"
import { Dropdown, Item } from "@/components/dropdown"
import { useAppStore } from "@/providers"
import NotificationModel from "@/features/notifications/NotificationModel"
import Icon from "@/components/icon"
import { observer } from "mobx-react-lite"

const NotificationButton: React.FC<{ count: number }> = ({ count }) => {
  return (
    <div className="relative dark:text-white">
      { count > 0 ? (
        <div className="absolute -top-2 -right-2 flex items-center justify-center rounded-full bg-red-600 w-5 h-5">
          { count }
        </div>
      ) : null }
      <Button variant="primary" icon="bell"/>
    </div>
  )
}

const GroupInvitation: React.FC<{ notification: NotificationModel }> = ({ notification }) => {
  return (
    <Item>
      <div className="flex flex-col space-y-2 w-72">
        <div className="flex justify-between items-center space-x-2">
          <Icon name="envelope"/>
          <span className="opacity-50">{ notification.sentTime }</span>
        </div>
        <p>{ notification.data.content }</p>
        <div className="flex justify-between space-x-2">
          <Button variant="primary" label="Accept" onClick={ () => notification.accept() }/>
          <Button variant="negative" label="Decline" onClick={ () => notification.decline() }/>
        </div>
      </div>
    </Item>
  )
} 

// const Notifications: React.FC = () => {
//   const { notificationStore } = useAppStore()

//   const notificationFactory = (notification: NotificationModel) => {
//     switch(notification.data.type) {
//       case "GROUP:INVITATION": return <GroupInvitation key={ notification.id } notification={ notification }/>
//       default: return <Item key={ notification.id } children="Unsupported" icon="circle_xmark"/>
//     }
//   }

//   return (
//     <Dropdown parent={ <NotificationButton count={ notificationStore.count }/> }>
//       { notificationStore.count > 0 ? (
//         <>
//           {notificationStore.notifications.map(notification => (
//             notificationFactory(notification)
//           ))}
//         </>
//       ) : (
//         <Item>No notifications</Item>
//       ) }
//     </Dropdown>
//   )
// }

// export default observer(Notifications)