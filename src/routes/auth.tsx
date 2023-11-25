import { lazy } from "react"
import { RouteObject } from "react-router-dom"

const AuthPage = lazy(() => import("@/pages/auth/AuthPage"))
const LoginForm = lazy(() => import("@/pages/auth/login/LoginForm"))

const routes: RouteObject = {
  path: "auth",
  element: <AuthPage/>,
  children: [
    {
      path: 'login',
      element: <LoginForm/>
    },
    // {
    //   path: 'register',
    //   element: <RegisterPage/>
    // }
  ]
}

export default routes
