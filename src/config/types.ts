export interface Config { 
  app: AppConfig,
  api: ApiConfig,
  socket: SocketConfig,
}

export interface AppConfig {
  title: string
}

export interface ApiConfig {
  baseUrl: string,
  timeout: number
}

export interface SocketConfig {
  baseUrl: string
}
