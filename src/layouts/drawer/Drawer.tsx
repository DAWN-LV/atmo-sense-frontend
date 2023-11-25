import Link, { Props } from "@/layouts/drawer/components/Link"

const options: Props[] = [
  { to: "/dashboard", label: "Dashboard", icon: "gauge" },
  { to: "/sensors", label: "Sensors", icon: "microchip" },
  { to: "/documentation", label: "Docs", icon: "box_archive" },
]

const Drawer = () => {
  return (
    <div className="-translate-x-full transform hidden fixed top-0 start-0 bottom-0 w-72 pt-16 pb-10 lg:block lg:translate-x-0">
      <nav className="p-6 w-full flex flex-col flex-wrap">
        <ul>
          {options.map(option => (
            <Link key={ option.label } { ...option }/>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Drawer
