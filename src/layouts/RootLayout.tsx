import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import Header from "@/layouts/internal/header/Header"
import Drawer from "@/layouts/internal/drawer/Drawer"
import LoadingLayout from "@/layouts/LoadingLayout"

const RootLayout: React.FC = () => (
  <>
    <Header/>
    <div className="w-full lg:ps-72">
      <Suspense fallback={ <LoadingLayout/> }> 
        <Outlet/>
      </Suspense>
    </div>
    <Drawer/>
  </>
)

export default RootLayout