import React from 'react'
import ReactDOM from 'react-dom/client'
import Notifications from '@/components/notification'
import Providers from '@/providers'
import Head from '@/components/Head'
import App from '@/App.tsx'

import '@/assets/styles/index.css'

import config from '@/config'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <Head>
        <title>{ config.app.title }</title>
      </Head>
      <Notifications/>
      <App/>
    </Providers>
  </React.StrictMode>
)
