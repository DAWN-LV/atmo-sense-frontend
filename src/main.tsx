import React from 'react'
import ReactDOM from 'react-dom/client'
import Notifications from '@/components/notification'
import Providers from '@/providers'
import App from '@/App.tsx'

import '@/assets/styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <Notifications/>
      <App/>
    </Providers>
  </React.StrictMode>
)
