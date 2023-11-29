import Icon from "@/components/icon"
import { useAppStore } from "@/providers"

const Avatar: React.FC<React.HTMLProps<HTMLDivElement>> = ({ ...props }) => {
  const { userStore: { user } } = useAppStore()

  const AvatarContent = () => {
    if (user.avatar) {
      return <img src={ user.avatar } alt="Avatar"/>
    }

    return <Icon name="circle_user" className="w-9 h-9 text-3xl"/>
  }

  return (
    <div { ...props } className="cursor-pointer rounded-full w-9 h-9">
      <AvatarContent/>
    </div>
  )
}

export default Avatar