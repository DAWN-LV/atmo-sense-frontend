import { observer } from 'mobx-react-lite'
import { RouterProvider } from "react-router-dom"

import { getAppRoutes } from "@/plugin/router"
import { useAppStore } from '@/hooks/useAppStore'

const App: React.FC = () => {
  const { sessionStore } = useAppStore()

  return (
    <RouterProvider router={ getAppRoutes(sessionStore.isValid) }/>
  )
}

export default observer(App)
