import { makeAutoObservable } from "mobx"
import { NotificationDTO } from "@/features/notifications/types"
import NotificationApi from "@/features/notifications/NotificationApi"
import NotificationStore from "@/features/notifications/NotificationStore"

export default class NotificationModel {
  readonly id: number
  readonly data

  constructor(readonly store: NotificationStore, dto: NotificationDTO) {
    this.id = dto.id
    this.data = dto

    makeAutoObservable(this)
  }

  get sentTime() {
    return new Date(this.data.createdAt).toJSON()
  }

  async accept() {
    await NotificationApi.accept(this.id)
    this.store.notifications.delete(this.id)
  }

  async decline() {
    await NotificationApi.delete(this.id)
    this.store.notifications.delete(this.id)
  }
}