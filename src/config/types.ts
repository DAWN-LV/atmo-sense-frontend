export interface Config { 
  app: AppConfig,
  api: ApiConfig
}

export interface AppConfig {
  title: string
}

export interface ApiConfig {
  baseUrl: string,
  timeout: number
}