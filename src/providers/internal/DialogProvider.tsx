import React, { useState, useCallback, useContext } from "react"
import { DialogComponentType, DialogContextType, OpenDialogParams, WithChildren } from "@/providers/types"
import { assertDefined } from "@/utils"

const Context = React.createContext<DialogContextType | undefined>(undefined)

export const useDialog = (): DialogContextType => {
  return assertDefined(
    useContext(Context),
    'Dialog is not provided.'
  )
}

export function DialogProvider({ children }: WithChildren) {
  const [ dialog, setDialog ] = useState<OpenDialogParams | undefined>(undefined)

  const closeDialog = useCallback(() => setDialog(undefined), [])

  const openDialog = useCallback((components: DialogComponentType, props: Record<string, any> = {}, options: any = {}) => {
    setDialog({ components, props, options })
  }, [])

  return (
    <Context.Provider value={{ dialog, openDialog }}>
      { children }
      { dialog && <dialog.components { ...dialog.props } closeDialog={ closeDialog }/> }
    </Context.Provider>
  )
}

export default Context