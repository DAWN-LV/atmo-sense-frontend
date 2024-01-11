import HttpClient from "@/plugin/HttpClient"
import config from "@/config"
import { io } from "socket.io-client"

const http = new HttpClient(config.api.baseUrl)
const socket = io(config.api.baseUrl, {
  autoConnect: false
})

export { http, socket }