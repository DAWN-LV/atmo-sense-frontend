import { unauthorizedUserRoutes, authorizedUserRoutes } from "@/routes"
import { createBrowserRouter } from "react-router-dom"

export const getAppRoutes = (isAuthorized: boolean) => {
    return createBrowserRouter(isAuthorized ? authorizedUserRoutes : unauthorizedUserRoutes)
}
