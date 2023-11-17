import { http } from "@/globals"
import { SensorDTO } from "@/store/sensor/types"

export default abstract class SensorApi {
  static async fetchAll() {
    return http.get<SensorDTO[]>("sensors").send()
  }
}