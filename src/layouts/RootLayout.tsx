import { Suspense, useCallback, useState } from "react"
import { Outlet } from "react-router-dom"
import Header from "@/layouts/internal/header/Header"
import Drawer from "@/layouts/internal/drawer/Drawer"
import LoadingLayout from "@/layouts/LoadingLayout"

const RootLayout: React.FC = () => {
  const [ isOpen, setOpen ] = useState(false)

  const toggleSidebar = useCallback(() => setOpen(prev => !prev), [])

  return (
    <>
      <Header onClick={ toggleSidebar }/>
      <div className="w-full lg:ps-72">
        <Suspense fallback={ <LoadingLayout/> }> 
          <Outlet/>
        </Suspense>
      </div>
      <Drawer isOpen={ isOpen }/>
    </>
  )
}

export default RootLayout