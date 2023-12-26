import { Navigate, RouteObject } from "react-router-dom"
import RootLayout from "@/layouts/RootLayout"

import auth from '@/routes/internal/auth'
import dashboard from '@/routes/internal/dashboard'
import documentation from '@/routes/internal/documentation'
import sensors from '@/routes/internal/sensors'
import groupDetails from '@/routes/internal/groupDetails'

export const publicRoutes: RouteObject[] = [
  auth,
  {
    path: "*",
    element: <Navigate to={`${auth.path}/login`} replace />
  }
]

export const privateRoutes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout/>,
    children: [ 
      sensors, 
      dashboard,  
      documentation,
      groupDetails
    ]
  },
  {
    path: "*",
    element: <Navigate to={ `/${dashboard.path}` } replace />
  }
]
