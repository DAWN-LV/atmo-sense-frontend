import Logo from "@/components/Logo"
import UserMenu from "@/layouts/components/header/components/UserMenu"
import config from "@/config"

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 inset-x-0 flex flex-wrap shadow-sm sm:justify-start sm:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 sm:py-4 dark:bg-gray-800 dark:border-gray-700">
      <nav className="flex basis-full items-center w-full mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center space-x-2 cursor-pointer">
          <Logo/>
          <h2 className="text-lg font-bold">{ config.app.title }</h2>
        </div>

        <div className="w-full flex items-center justify-end ms-auto sm:justify-between sm:gap-x-3 sm:order-3">
          <div className="hidden sm:block">
            {/* Searcher */}
          </div>

          <div className="flex items-center justify-center gap-2">
            <UserMenu/>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header