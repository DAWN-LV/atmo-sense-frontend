import { http } from "@/globals"
import { CreateNotificationDTO, NotificationDTO } from "@/features/notifications/types"

export default abstract class NotificationApi {
  static async fetchAll() {
    return http.get<NotificationDTO[]>("notifications")
  }

  static async fetchOne(id: number) {
    return http.get<NotificationDTO>(`notifications/${id}`)
  }

  static async create(dto: CreateNotificationDTO) {
    return http.post("notifications", dto)
  }

  static async delete(id: number) {
    return http.delete(`notifications/${id}`)
  }

  static async accept(id: number) {
    return http.post(`notifications/${id}/accept`)
  }
}