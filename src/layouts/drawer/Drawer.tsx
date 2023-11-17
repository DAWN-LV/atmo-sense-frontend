import Logo from "@/components/Logo"
import Link, { Props } from "@/layouts/drawer/components/Link"

const options: Props[] = [
  { to: "/dashboard", label: "Dashboard", icon: "gauge" },
  { to: "/sensors", label: "Sensors", icon: "microchip" },
]

const Drawer = () => {
  return (
    <div className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-6">
        <Logo/>
      </div>

      <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap">
        <ul className="space-y-1.5">
          {options.map(option => (
            <Link key={option.label} { ...option }/>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Drawer
