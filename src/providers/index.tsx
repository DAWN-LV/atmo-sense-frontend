import { DialogCollectionProvider, useDialogCollection } from "@/providers/internal/DialogCollectionProvider"
import { AppStoreProvider, useAppStore } from "@/providers/internal/AppStoreProvider"
import { Provider, WithChildren } from "@/providers/types"
import { AlertProvider, useAlert } from "@/providers/internal/AlertProvider"

function composeProviders(...providers: Provider[]) {
  return function ComposedProviders({ children }: WithChildren) {
    return providers.reduceRight(
      (child, Provider) => <Provider>{ child }</Provider>,
      children
    )
  }
}

const Providers = composeProviders(
  AlertProvider,
  AppStoreProvider,
  DialogCollectionProvider
)

export { useAppStore, useDialogCollection, useAlert }
export default Providers