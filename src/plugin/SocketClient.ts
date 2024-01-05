import { Socket, io } from "socket.io-client"

export default class SocketClient {
  private socket: Socket | undefined = undefined

  constructor(private baseUrl: string) {}

  async connect(token: string) {
    this.socket = io(this.baseUrl, {
      query: { token }
    })

    // this.socket.on('disconnect', () => this.disconnect())
  }

  on(action: string, callback: (...args: any[]) => void) {
    this.socket?.on(action, callback)
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect()
      this.socket = undefined

      console.log('Socket disconnected')
    }
  }
}