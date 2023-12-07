import { DialogCollectionProvider, useDialogCollection } from "@/providers/internal/DialogCollectionProvider"
import { AppStoreProvider, useAppStore } from "@/providers/internal/AppStoreProvider"
import { NotificationProvider, useNotification } from "@/providers/internal/NotificationProvider"
import { Provider, WithChildren } from "@/providers/types"

function composeProviders(...providers: Provider[]) {
  return function ComposedProviders({ children }: WithChildren) {
    return providers.reduceRight(
      (child, Provider) => <Provider>{ child }</Provider>,
      children
    )
  }
}

const Providers = composeProviders(
  NotificationProvider,
  AppStoreProvider,
  DialogCollectionProvider
)

export { useAppStore, useDialogCollection, useNotification }
export default Providers