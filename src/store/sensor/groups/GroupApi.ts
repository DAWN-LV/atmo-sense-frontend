import { http } from "@/globals"
import { CreateGroupDTO, GroupDTO } from "@/store/sensor/groups/types"

export default abstract class SensorApi {
  static async fetchAll() {
    return http.get<GroupDTO[]>("groups")
  }

  static async fetchOne(id: number) {
    return http.get<GroupDTO>(`groups/${id}`)
  }

  static async create(dto: CreateGroupDTO) {
    return http.post<GroupDTO>("groups", dto)
  }

  static async update(id: number, dto: CreateGroupDTO) {
    return http.patch<GroupDTO>(`groups/${id}`, dto)
  }

  static async delete(id: number) {
    return http.delete(`groups/${id}`)
  }
}