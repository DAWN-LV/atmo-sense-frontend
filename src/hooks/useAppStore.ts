import { useContext } from "react"
import Context from "@/store/provider"
import { assertDefined } from "@/utils"

export function useAppStore() {
  return assertDefined(
    useContext(Context),
    'App store is not provided.'
  )
}