import { observer } from "mobx-react-lite"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { privateRoutes, publicRoutes } from "@/routes"
import LoadingLayout from "@/layouts/LoadingLayout"
import setupErrorHandler from '@/error/ErrorHandler'
import createHttpErrorHandler from "./error/handlers/createHttpErrorHandler"
import { useAlert } from "@/providers/internal/AlertProvider"
import { useAppStore } from "@/providers"

const App: React.FC = () => {
  const { sessionStore, load } = useAppStore()
  const alert = useAlert()

  setupErrorHandler([
    createHttpErrorHandler(alert),
    function (error) {
      alert.add({
        category: "error",
        content: error.message,
      })
  
      console.warn("Error: ", error)
  
      return false
    }
  ])

  const getRoutes = (isValid: boolean) => {
    return createBrowserRouter(isValid ? privateRoutes : publicRoutes)
  }

  if (load.isPending) {
    return <LoadingLayout/>
  }

  return (
    <RouterProvider router={ getRoutes(sessionStore.isValid) }/>
  )
}

export default observer(App)
