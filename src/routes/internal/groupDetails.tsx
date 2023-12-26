import { lazy } from "react"
import { RouteObject } from "react-router-dom"

const GroupDetailsPage = lazy(() => import("@/pages/groupDetails/GroupDetailsPage"))

const route: RouteObject = {
  path: 'group-details/:id',
  element: <GroupDetailsPage/>,
}

export default route
