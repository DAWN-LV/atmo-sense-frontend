import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { privateRoutes, publicRoutes } from "@/routes"
import { useAppStore } from '@/store/provider'
import LoadingLayout from "@/layouts/LoadingLayout"
import { observer } from "mobx-react-lite"
import React from "react"

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
