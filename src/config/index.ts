import { ApiConfig, AppConfig, Config } from "@/config/types"

const app: AppConfig = {
  title: "AtmoSense"
}

const api: ApiConfig = {
  baseUrl: `${location.host}:3000/api`,
  timeout: 30_000
}

export default { app, api } as Readonly<Config>