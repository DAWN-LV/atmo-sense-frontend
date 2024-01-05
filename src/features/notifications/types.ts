export type NotificationType = "GROUP:INVITATION"

export interface NotificationDTO {
  id: number
  senderId: number
  content: string
  recipientId: number
  createdAt: string
  type: string
  data: any
}

export interface CreateNotificationDTO {
  email: string
  type: NotificationType
  data: any
}