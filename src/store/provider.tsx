import React, { useState } from "react"
import AppStore from "@/store/AppStore"

const Context = React.createContext<AppStore | undefined>(undefined)

export function AppStoreProvider({ children }: any) {
  const [ store ] = useState(() => new AppStore())

  return (
    <Context.Provider value={ store }>
      { children }
    </Context.Provider>
  )
}

export default Context