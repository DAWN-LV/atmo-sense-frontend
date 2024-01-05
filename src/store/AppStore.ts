import { http, socket } from "@/globals"
import { reaction } from "mobx"
import useAsyncState from "@/hooks/mobx/useAsyncState"
import SessionStore from "@/store/session/SessionStore"
import UserStore from "@/store/user/UserStore"
import SensorContext from "@/store/sensor/SensorContext"
import NotificationStore from "@/features/notifications/NotificationStore"

export default class AppStore {
  readonly sensorContext
  readonly sessionStore
  readonly userStore

  constructor() {
    this.sensorContext = this.createSensorContext()
    this.sessionStore = this.createSessionStore()
    this.userStore = this.createUserStore()

    this.setupConnections()
  }

  load = useAsyncState(async () => {
    await this.sensorContext.load()
    await this.userStore.load()
  })

  private createSensorContext() {
    return new SensorContext()
  }

  private createSessionStore() {
    return new SessionStore()
  }

  private createUserStore() {
    return new UserStore()
  }

  // private createNotificationStore() {
  //   return new NotificationStore()
  // }

  private setupConnections() {
    reaction(
      () => this.sessionStore.isValid, 
      (isValid) => {
        if (isValid) {
          void socket.connect(this.sessionStore.session.token)

          void http.setAuthorization("Bearer " + this.sessionStore.session.token)
          
          void this.load()
        }
      },
      { fireImmediately: true }
    )
  }
}