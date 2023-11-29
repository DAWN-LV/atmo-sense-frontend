import NotificationStore from "@/store/notification/NotificationStore"
import { NotificationDTO } from "@/store/notification/types"
import { makeAutoObservable } from "mobx"

export default class NotificationModel {
  readonly type
  readonly title
  readonly message
  readonly timeout

  private isDismissed = false

  constructor(
    private store: NotificationStore,
    dto: NotificationDTO,
  ) {
    this.type = dto.type
    this.title = dto.title
    this.message = dto.message
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
    this.store.notifications.delete(this)
  }
}