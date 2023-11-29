import { lazy } from "react"
import { RouteObject } from "react-router-dom"

const AuthPage = lazy(() => import("@/pages/auth/AuthPage"))
const LoginForm = lazy(() => import("@/pages/auth/login/LoginForm"))
const RegisterForm = lazy(() => import("@/pages/auth/register/RegisterForm"))

const routes: RouteObject = {
  path: "auth",
  element: <AuthPage/>,
  children: [
    {
      path: "login",
      element: <LoginForm/>
    },
    {
      path: "register",
      element: <RegisterForm/>
    }
  ]
}

export default routes
