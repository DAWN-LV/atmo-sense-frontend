import { Socket, io } from "socket.io-client"

export default class SocketClient {
  private socket: Socket | undefined = undefined

  constructor(private baseUrl: string) {}

  async connect(token: string) {
    this.socket = io(this.baseUrl, {
      query: { token },
      transports: [ 'websocket' ],
      withCredentials: true,
    })

    this.socket.on('connect', () => {
      console.log('Socket connected')
    })

    this.socket.on('disconnect', () => {
      console.log('Socket disconnected')
      this.disconnect()
    })

    this.socket.on('connect_error', (error) => {
      console.error('Connection Error:', error)
    })
  }

  on(action: string, callback: (...args: any[]) => void) {
    console.log(`Listening for action: ${action}`)
    this.socket?.on(action, callback)
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect()
      this.socket = undefined

      console.log('Socket manually disconnected')
    }
  }
}
