import React, { useState, useCallback, useContext } from "react"
import { WithChildren } from "@/utils/types"
import { assertDefined } from "@/utils"
import { 
  DialogProps, 
  DialogContextType, 
  OpenDialogParams, 
  DialogComponentType 
} from "@/components/dialog/types"

const Context = React.createContext<DialogContextType | undefined>(undefined)

export const useDialog = (): DialogContextType => {
  return assertDefined(
    useContext(Context),
    'Dialog is not provided.'
  )
}

export function DialogProvider({ children }: WithChildren) {
  const [ dialog, setDialog ] = useState<OpenDialogParams | undefined>(undefined)

  const openDialog = useCallback((components: DialogComponentType, props: DialogProps = { closeDialog }, options: any = {}) => {
    setDialog({ components, props, options })
  }, [])

  const closeDialog = useCallback(() => {
    setDialog(undefined)
  }, [])

  return (
    <Context.Provider value={{ dialog, openDialog, closeDialog }}>
      { children }
      { dialog && <dialog.components { ...dialog.props } closeDialog={ closeDialog }/> }
    </Context.Provider>
  )
}

export default Context