import { RouteObject } from "react-router-dom";
import App from "../App";
import auth from './auth'

const routes: RouteObject[] = [
  auth,
  {
    path: '/',
    element: <App/>, // RootLayout with children
  }
]

export default routes;