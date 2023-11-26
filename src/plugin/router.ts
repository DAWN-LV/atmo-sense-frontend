import { privateRoutes, publicRoutes } from "@/routes"
import { createBrowserRouter } from "react-router-dom"

export const getAppRoutes = (isAuthorized: boolean) => {
  return createBrowserRouter(isAuthorized ? privateRoutes : publicRoutes)
}
