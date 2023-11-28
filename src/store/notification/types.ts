export type NotificationType = "error" | "warning" | "success" | "info"

export interface NotificationDTO {
  readonly type: NotificationType
  readonly title: string
  readonly message: string
  readonly timeout?: number
}