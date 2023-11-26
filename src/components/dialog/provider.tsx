import React, { useState, useCallback } from "react"
import { 
  DialogProps, 
  DialogContextType, 
  OpenDialogParams, 
  DialogComponentType 
} from "@/components/dialog/types"

const Context = React.createContext<DialogContextType | undefined>(undefined)

export const DialogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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