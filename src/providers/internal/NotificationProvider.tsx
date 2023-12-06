import React, { useState, useContext } from "react"
import NotificationStore from "@/store/notification/NotificationStore"
import { WithChildren } from "@/providers/types"
import { assertDefined } from "@/utils"

const Context = React.createContext<NotificationStore | undefined>(undefined)

export function useNotification() {
  return assertDefined(
    useContext(Context),
    'Notification store is not provided.'
  )
}

export function NotificationProvider({ children }: WithChildren) {
  const [ store ] = useState(() => new NotificationStore())

  return (
    <Context.Provider value={ store }>
      { children }
    </Context.Provider>
  )
}

export default Context