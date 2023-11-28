import React, { useState, useContext } from "react"
import { WithChildren } from "@/utils/types"
import AppStore from "@/store/AppStore"
import { assertDefined } from "@/utils"

const Context = React.createContext<AppStore | undefined>(undefined)

export function useAppStore() {
  return assertDefined(
    useContext(Context),
    'App store is not provided.'
  )
}

export function AppStoreProvider({ children }: WithChildren) {
  const [ store ] = useState(() => new AppStore())

  return (
    <Context.Provider value={ store }>
      { children }
    </Context.Provider>
  )
}

export default Context