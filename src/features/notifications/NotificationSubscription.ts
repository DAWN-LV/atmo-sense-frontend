import { socket } from "@/globals"

export default class NotificationSubscription {
  onCreate(callback: (id: number) => void) {
    return this.listener("CREATE", callback)
  }

  private listener(action: string, callback: (id: number) => void) {
    return socket.on("NOTIFICATION", ({ type, data }) => {
      if (type === action) {
        callback(data.id)
      }
    })
  }
}