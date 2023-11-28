import Avatar from "@/components/Avatar"
import Dropdown from "@/components/dropdown/Dropdown"
import Element from "@/components/dropdown/components/Element"
import { useAppStore } from "@/store/provider"

const UserMenu: React.FC = () => {
  const { sessionStore } = useAppStore()

  return (
    <Dropdown parent={ <Avatar/> }>
      <Element label="Sign out" onClick={ () => sessionStore.logout() }/>
    </Dropdown>
  )
}

export default UserMenu