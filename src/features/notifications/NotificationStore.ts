import { makeAutoObservable } from "mobx"
import useAsyncState from "@/hooks/mobx/useAsyncState"
import Dictionary from "@/plugin/dictionary/Dictionary"
import NotificationModel from "@/features/notifications/NotificationModel"
import NotificationApi from "@/features/notifications/NotificationApi"
import { NotificationDTO } from "@/features/notifications/types"
import NotificationSubscription from "@/features/notifications/NotificationSubscription"

export default class NotificationStore {
  private subscription = new NotificationSubscription()
  readonly notifications = new Dictionary<number, NotificationModel>()

  constructor() {
    makeAutoObservable(this)

    this.listenSubscription()
  }

  load = useAsyncState(async () => {
    const notifications = await NotificationApi.fetchAll()
    this.notifications.clear()
    notifications.forEach(notification => this.setNotification(notification))
  })

  async loadOne(id: number) {
    const dto = await NotificationApi.fetchOne(id)
    this.setNotification(dto)
  }

  get count() {
    return this.notifications.size
  }

  private setNotification(dto: NotificationDTO) {
    const notification = new NotificationModel(this, dto)
    this.notifications.set(notification.id, notification)
    return notification
  }

  private listenSubscription() {
    this.subscription.onCreate(id => this.loadOne(id))
  }
}