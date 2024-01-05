import { useCallback } from "react"
import Avatar from "@/components/Avatar"
import UserModel from "@/store/user/UserModel"
import { useDark } from "@/hooks/useDark"
import { Dropdown, Item } from "@/components/dropdown"
import { useAppStore } from "@/providers"

const UserMetadata: React.FC<{ user: UserModel }> = ({ user }) => (
  <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
    <div className="capitalize">{ user.username }</div>
    <div className="font-medium truncate">{ user.email }</div>
  </div>
)

const UserMenu: React.FC = () => {
  const { sessionStore, userStore: { user } } = useAppStore()
  const { isDark, setDark } = useDark()

  const toggleTheme = useCallback(() => setDark(prev => !prev), [])

  return (
    <Dropdown 
      parent={ <Avatar/> } 
      append={ <UserMetadata user={ user }/> }
    >
      <Item children="Change Theme" icon={ isDark ? "sun" : "moon" } onClick={ toggleTheme }/>
      <Item children="Sign out" icon="right_from_bracket" onClick={ () => sessionStore.logout() }/>
    </Dropdown>
  )
}

export default UserMenu