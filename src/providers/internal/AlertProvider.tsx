import React, { useState, useContext } from "react"
import AlertStore from "@/store/alerts/AlertStore"
import { WithChildren } from "@/providers/types"
import { assertDefined } from "@/utils"

const Context = React.createContext<AlertStore | undefined>(undefined)

export function useAlert() {
  return assertDefined(
    useContext(Context),
    'Alert store is not provided.'
  )
}

export function AlertProvider({ children }: WithChildren) {
  const [ store ] = useState(() => new AlertStore())

  return (
    <Context.Provider value={ store }>
      { children }
    </Context.Provider>
  )
}

export default Context