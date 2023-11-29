import { DialogProvider, useDialog, DialogProps } from "@/providers/internal/DialogProvider"
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
  DialogProvider
)

export { useAppStore, useDialog, useNotification }
export default Providers