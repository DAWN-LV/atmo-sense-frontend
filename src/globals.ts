import HttpClient from "@/plugin/HttpClient"
import SocketClient from "@/plugin/SocketClient"
import config from "@/config"

const http = new HttpClient(config.api.baseUrl)
const socket = new SocketClient(config.socket.baseUrl)

console.log("API BASEURL = ", config.api.baseUrl)
console.log("SOCKET BASEURL = ", config.socket.baseUrl)

export { http, socket }