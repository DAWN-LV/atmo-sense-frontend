import { http } from "@/globals"
import { CreateSensorDTO, SensorDTO } from "@/store/sensor/types"

export default abstract class SensorApi {
  static async fetchAll() {
    return http.get<SensorDTO[]>("sensors")
  }

  static async create(dto: CreateSensorDTO) {
    return http.post<SensorDTO>("sensors", { ...dto })
  }

  static async delete(id: number) {
    return http.delete(`sensors/${ id }`)
  }
}