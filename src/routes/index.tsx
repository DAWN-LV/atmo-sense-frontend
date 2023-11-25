import { RouteObject } from "react-router-dom"
import RootLayout from "@/layouts/RootLayout"

import auth from '@/routes/auth'
import dashboard from '@/routes/dashboard'
import documentation from '@/routes/documentation'
import sensors from '@/routes/sensors'

const routes: RouteObject[] = [
  auth,
  {
    path: '/',
    element: <RootLayout/>,
    children: [ 
      sensors, 
      dashboard,  
      documentation
    ]
  }
]

export default routes