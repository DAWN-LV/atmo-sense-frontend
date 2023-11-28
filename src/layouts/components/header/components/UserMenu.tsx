import Avatar from "@/components/Avatar"
import Dropdown from "@/components/dropdown/Dropdown"
import Element from "@/components/dropdown/components/Element"
import { useAppStore } from "@/store/provider"
import UserModel from "@/store/user/UserModel"

const UserMetadata: React.FC<{ user: UserModel }> = ({ user }) => {
  return (
    <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
      <div className="capitalize">{ user.username }</div>
      <div className="font-medium truncate">{ user.email }</div>
    </div>
  )
}

const UserMenu: React.FC = () => {
  const { sessionStore, userStore: { user } } = useAppStore()

  return (
    <Dropdown 
      parent={ <Avatar/> } 
      append={ <UserMetadata user={ user }/> }
    >
      <Element label="Sign out" onClick={ () => sessionStore.logout() }/>
    </Dropdown>
  )
}

export default UserMenu