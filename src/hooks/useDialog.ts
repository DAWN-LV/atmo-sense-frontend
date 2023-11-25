import { useContext } from "react"
import { DialogContextType } from "@/components/dialog/types"
import Context from "@/components/dialog/provider"

export const useDialog = (): DialogContextType => {
  const context = useContext(Context)

  if (!context) {
      throw new Error('useDialog must be used within a DialogProvider')
  }

  return context
}