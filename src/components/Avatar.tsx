import { useAppStore } from "@/store/provider"
import Icon from "@/components/icon/Icon"

const Avatar: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  const { userStore: { user } } = useAppStore()

  return (
    <div className="cursor-pointer rounded-full w-9 h-9" onClick={ onClick }>
      { user.avatar ? (
        <img src={ user.avatar } alt="Avatar"/>
      ) : (
        <Icon name="circle_user" className="w-9 h-9 text-3xl"/>
      )}
    </div>
  )
}

export default Avatar