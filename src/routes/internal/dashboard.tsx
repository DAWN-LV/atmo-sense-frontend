import { lazy } from "react"
import { RouteObject } from "react-router-dom"

const DashboardPage = lazy(() => import("@/pages/dashboard/DashboardPage"))

const route: RouteObject = {
  path: 'dashboard',
  element: <DashboardPage/>,
}

export default route
