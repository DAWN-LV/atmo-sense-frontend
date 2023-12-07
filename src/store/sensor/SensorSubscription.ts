import { socket } from "@/globals"

export default class SensorSubscription {
  onUpdate(callback: (id: number) => void) {
    return this.listener("UPDATE", callback)
  }

  private listener(action: string, callback: (id: number) => void) {
    return socket.on("SENSOR", ({ type, data }) => {
      if (type === action) {
        callback(data.id)
      }
    })
  }
}