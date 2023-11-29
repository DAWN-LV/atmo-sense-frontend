import Link, { Props } from "@/layouts/internal/drawer/components/Link"
import { classNames } from "@/utils"

const options: Props[] = [
  { to: "/dashboard", label: "Dashboard", icon: "gauge" },
  { to: "/sensors", label: "Sensors", icon: "microchip" },
  { to: "/documentation", label: "Docs", icon: "box_archive" }
]

const Drawer: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <div className={ classNames("-translate-x-full transform duration-300 fixed top-0 start-0 bottom-0 w-72 pt-16 pb-10 lg:block lg:translate-x-0", isOpen ? "block translate-x-0 dark:bg-gray-900 border-r border-gray-700" : "") }>
    <nav className="p-6 w-full flex flex-col flex-wrap">
      <ul>
        {options.map(option => (
          <Link key={ option.label } { ...option }/>
        ))}
      </ul>
    </nav>
  </div>
)

export default Drawer
