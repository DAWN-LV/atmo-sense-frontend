import { Navigate, RouteObject } from "react-router-dom"
import RootLayout from "@/layouts/RootLayout"

import auth from '@/routes/auth'
import dashboard from '@/routes/dashboard'
import documentation from '@/routes/documentation'
import sensors from '@/routes/sensors'

export const unauthorizedUserRoutes: RouteObject[] = [
  auth,
  {
    path: "*",
    element: <Navigate to={`${auth.path}/login`} replace />
  }
]

export const authorizedUserRoutes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout/>,
    children: [ 
      sensors, 
      dashboard,  
      documentation
    ]
  },
  {
    path: "*",
    element: <Navigate to={`/${dashboard.path}`} replace />
  }
]
