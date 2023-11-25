import { ApiConfig, AppConfig, Config } from "@/config/types"

const app: AppConfig = {
  title: "AtmoSense"
}

const api: ApiConfig = {
  baseUrl: "http://127.0.0.1:3000/api",
  timeout: 30_000
}

export default { app, api } as Readonly<Config>