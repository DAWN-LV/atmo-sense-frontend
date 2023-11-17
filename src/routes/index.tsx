import { RouteObject } from "react-router-dom"

import auth from './auth'
import dashboard from './dashboard'
import sensors from './sensors'
import RootLayout from "@/layouts/RootLayout"

const routes: RouteObject[] = [
  auth,
  {
    path: '/',
    element: <RootLayout/>,
    children: [ sensors, dashboard ]
  }
]

export default routes