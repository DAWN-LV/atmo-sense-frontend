import { observer } from "mobx-react-lite"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { privateRoutes, publicRoutes } from "@/routes"
import LoadingLayout from "@/layouts/LoadingLayout"
import { useAppStore, useNotification } from "@/providers"
import setupErrorHandler from '@/error/ErrorHandler'
import createHttpErrorHandler from "./error/handlers/createHttpErrorHandler"

class GlobalError extends Error {
  body: any

  constructor(body?: any) {
    super(body.message)

    this.name = body.error
    this.message = body.message
  }
}

const App: React.FC = () => {
  const { sessionStore, load } = useAppStore()
  const notification = useNotification()

  setupErrorHandler([
    createHttpErrorHandler(notification),
    function (error) {
      notification.add({
        type: "error",
        title: error.name,
        message: error.message,
      })
  
      console.warn(error)
  
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
