import { http } from "@/globals"
import { CreateSensorDTO, SensorDTO, SensorDataDTO, UpdateSensorDTO } from "@/store/sensor/sensors/types"

export default abstract class SensorApi {
  static async fetchAll() {
    return http.get<SensorDTO[]>("sensors")
  }

  static async fetchOne(id: number) {
    return http.get<SensorDTO>(`sensors/${id}`)
  }

  static async fetchData(id: number, query: { from: number, to: number }) {
    return http.get<SensorDataDTO[]>(`sensors/${id}/data`, { query })
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

  static async play(mac: string) {
    return http.post(`sensors/${mac}/play`)
  }

  static async pause(mac: string) {
    return http.post(`sensors/${mac}/pause`)
  }

  static async restart(mac: string) {
    return http.post(`sensors/${mac}/restart`)
  }
}