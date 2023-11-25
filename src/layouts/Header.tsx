import Logo from "@/components/Logo"

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

          <div className="flex flex-row items-center justify-end gap-2">
            <div className="hs-dropdown relative inline-flex [--placement:bottom-right]">
              <button id="hs-dropdown-with-header" type="button" className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                <img className="inline-block h-[2.375rem] w-[2.375rem] rounded-full ring-2 ring-white dark:ring-gray-800" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description"/>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header