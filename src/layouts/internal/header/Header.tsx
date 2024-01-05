import Logo from "@/components/Logo"
import UserMenu from "@/layouts/internal/header/components/UserMenu"
import Icon from "@/components/icon"
import config from "@/config"

const Header: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <header className="sticky top-0 inset-x-0 flex flex-wrap shadow-sm sm:justify-start sm:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 sm:py-4 dark:bg-gray-800 dark:border-gray-700">
      <nav className="flex justify-between items-center w-full mx-auto px-4 sm:px-6 md:px-8">
        <Icon name="bars" className="md:hidden dark:text-white cursor-pointer" onClick={ onClick }/>

        <div className="flex space-x-2">
          <Logo/>
          <h2 className="text-lg font-bold dark:text-white">{ config.app.title }</h2>
        </div>

        <div className="flex items-center space-x-2">
          <UserMenu/>
        </div>
      </nav>
    </header>
  )
}

export default Header