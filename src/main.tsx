import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.tsx'

import { AppStoreProvider } from '@/store/provider'
import { DialogProvider } from '@/components/dialog/provider'

import './assets/styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppStoreProvider>
      <DialogProvider>
        <App/>
      </DialogProvider>
    </AppStoreProvider>
  </React.StrictMode>
)
