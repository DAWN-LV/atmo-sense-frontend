import { lazy } from "react"
import { RouteObject } from "react-router-dom"

const SensorsPage = lazy(() => import("@/pages/sensors/SensorPage"))

const route: RouteObject = {
  path: 'sensors',
  element: <SensorsPage/>,
}

export default route
