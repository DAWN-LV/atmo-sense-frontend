import { useContext } from "react"
import { assertDefined } from "@/utils"
import Context from "@/store/provider"

export function useAppStore() {
  return assertDefined(
    useContext(Context),
    'App store is not provided.'
  )
}