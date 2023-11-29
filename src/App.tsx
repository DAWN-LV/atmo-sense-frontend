import React from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { privateRoutes, publicRoutes } from "@/routes"
import LoadingLayout from "@/layouts/LoadingLayout"
import { observer } from "mobx-react-lite"
import { useAppStore } from "@/providers"

const App: React.FC = () => {
  const { sessionStore, load } = useAppStore()

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
