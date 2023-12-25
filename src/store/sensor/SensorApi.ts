import { http } from "@/globals"
import { CreateSensorDTO, SensorDTO, UpdateSensorDTO } from "@/store/sensor/types"

export default abstract class SensorApi {
  static async fetchAll() {
    return http.get<SensorDTO[]>("sensors")
  }

  static async fetchOne(id: number) {
    return http.get<SensorDTO>(`sensors/${id}`)
  }

  static async fetchData(id: number, query: { from: number, to: number }) {
    return http.get<any>(`sensors/${id}/data`, { query })
  }

  static async create(dto: CreateSensorDTO) {
    return http.post<SensorDTO>("sensors", dto)
  }

  static async update(id: number, dto: UpdateSensorDTO) {
    return http.patch<SensorDTO>(`sensors/${id}`, dto)
  }

  static async delete(id: number) {
    return http.delete(`sensors/${id}`)
  }
}