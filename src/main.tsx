import React from 'react'
import ReactDOM from 'react-dom/client'
import Notifications from '@/components/notification/Notifications'
import App from '@/App.tsx'

import { Provider, WithChildren } from '@/utils/types'
import { AppStoreProvider } from '@/store/provider'
import { NotificationProvider } from '@/store/notification/provider'
import { DialogProvider } from '@/components/dialog/provider'

import '@/assets/styles/index.css'

// TODO: remove from main.tsx
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

ReactDOM.createRoot(document.getElementById('root')!)
  .render(
    <React.StrictMode>
      <Providers>
        <Notifications/>
        <App/>
      </Providers>
    </React.StrictMode>
  )
