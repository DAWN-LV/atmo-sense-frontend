import { observable } from "mobx"
import { useContext, useState, useMemo, createContext } from "react"
import { WithChildren } from "@/providers/types"

type DialogCollectionType = Map<string, React.ComponentType<any>>

export const Context = createContext<DialogCollectionType | undefined>(undefined)

function createDialogCollection() {
  return observable.map()
}

export function useDialogCollection() {
  const collection = useContext(Context)
  if (!collection) {
    throw new Error('DialogCollection is not provided.')
  }

  return collection
}

export function DialogCollectionProvider({ children }: WithChildren) {
  const [ collection ] = useState(createDialogCollection)

  const providerValue = useMemo(() => collection, [ collection ])

  return (
    <Context.Provider value={providerValue}>
      { children }
    </Context.Provider>
  )
}
