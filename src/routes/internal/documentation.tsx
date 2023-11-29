import { lazy } from "react"
import { RouteObject } from "react-router-dom"

const DocumentationPage = lazy(() => import("@/pages/documentation/DocumentationPage"))

const route: RouteObject = {
  path: 'documentation',
  element: <DocumentationPage/>,
}

export default route
