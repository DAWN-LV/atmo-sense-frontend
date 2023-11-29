import NotificationModel from "@/store/notification/NotificationModel"
import { makeAutoObservable } from "mobx"
import { NotificationDTO } from "./types"

export default class NotificationStore {
  readonly notifications = new Set<NotificationModel>()

  constructor() {
    makeAutoObservable(this)
  }

  get active() {
    return Array.from(this.notifications.values()).filter(notification => notification.isActive)
  }

  add(dto: NotificationDTO) {
    this.notifications.add(new NotificationModel(this, dto))
  }
}