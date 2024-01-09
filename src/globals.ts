import HttpClient from "@/plugin/HttpClient"
import SocketClient from "@/plugin/SocketClient"
import config from "@/config"

const http = new HttpClient(config.api.baseUrl)
const socket = new SocketClient(config.socket.baseUrl)

export { http, socket }