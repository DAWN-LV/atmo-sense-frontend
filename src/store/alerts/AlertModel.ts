import NotificationStore from "@/store/alerts/AlertStore"
import { AlertDTO, AlertType } from "@/store/alerts/types"
import { makeAutoObservable } from "mobx"

export default class AlertModel {
  readonly category: AlertType
  readonly content: string
  readonly timeout: number

  private isDismissed = false

  constructor(protected store: NotificationStore, dto: AlertDTO) {
    this.category = dto.category
    this.content = dto.content
    this.timeout = dto.timeout || 3_000

    makeAutoObservable(this)
  }

  get isActive() {
    return !this.isDismissed
  }

  dismiss() {
    this.isDismissed = true
  }

  remove() {
    this.store.alerts.delete(this)
  }
}