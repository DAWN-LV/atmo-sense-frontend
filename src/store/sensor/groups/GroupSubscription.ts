import { socket } from "@/globals"

export default class GroupSubscription {
  onCreate(callback: (id: number) => void) {
    return this.listener("CREATE", callback)
  }

  onUpdate(callback: (id: number) => void) {
    return this.listener("UPDATE", callback)
  }

  onDelete(callback: (id: number) => void) {
    return this.listener("DELETE", callback)
  }

  private listener(action: string, callback: (id: number) => void) {
    return socket.on("GROUP", ({ type, data }) => {
      if (type === action) {
        callback(data.id)
      }
    })
  }
}