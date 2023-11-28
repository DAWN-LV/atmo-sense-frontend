import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import Header from "@/layouts/components/header/Header"
import Drawer from "@/layouts/components/drawer/Drawer"

const RootLayout: React.FC = () => {
  return (
    <>
      <Header/>
      <div className="w-full lg:ps-72">
        {/* TODO: Change fallback component */}
        <Suspense fallback={ <div>Loading...</div> }> 
          <Outlet/>
        </Suspense>
      </div>
      <Drawer/>
    </>
  )
}

export default RootLayout