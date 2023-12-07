import HttpClient from "@/plugin/HttpClient"
import config from "@/config"

const http = new HttpClient(config.api.baseUrl)

export { http }