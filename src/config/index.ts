import { 
  ApiConfig, 
  AppConfig,
  Config, 
  SocketConfig 
} from "@/config/types"

const app: AppConfig = {
  title: "AtmoSense"
}

const api: ApiConfig = {
  baseUrl: "http://" + location.hostname + ":3000/api",
  timeout: 30_000
}

const socket: SocketConfig = {
  baseUrl: "ws://" + location.hostname + ":3000"
}

export default { app, api, socket } as Readonly<Config>