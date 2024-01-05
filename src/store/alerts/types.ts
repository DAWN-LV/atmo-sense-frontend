export type AlertType = "error" | "warning" | "success" | "info"

export interface AlertDTO {
  readonly category: AlertType 
  readonly content: string
  readonly timeout?: number
}
