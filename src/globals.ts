import HttpClient from "@/plugin/HttpClient"
import io from "socket.io-client"
import config from "@/config"

const http = new HttpClient(config.api.baseUrl)
const socket = io(config.socket.url)

socket.on("connect", () => {
  console.log("Socket connected.")
})

export { http, socket }