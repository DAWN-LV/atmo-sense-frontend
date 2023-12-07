import React from "react"
import ReactDOM from "react-dom/client"
import Head from "@/components/Head"
import NotificationLayout from "@/layouts/NotificationLayout"
import DialogLayout from "@/layouts/DialogLayout"
import Providers from "@/providers"
import App from "@/App.tsx"

import "@/assets/styles/index.css"

import config from "@/config"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <DialogLayout/>
      <NotificationLayout/>
      <Head>
        <title>{ config.app.title }</title>
      </Head>
      <App/>
    </Providers>
  </React.StrictMode>
)
