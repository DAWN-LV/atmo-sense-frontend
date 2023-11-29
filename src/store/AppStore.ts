import { http } from "@/globals"
import useAsyncState from "@/hooks/mobx/useAsyncState"
import SensorStore from "@/store/sensor/SensorStore"
import SessionStore from "@/store/session/SessionStore"
import UserStore from "@/store/user/UserStore"
import { reaction } from "mobx"

export default class AppStore {
  readonly sensorStore
  readonly sessionStore
  readonly userStore
  
  constructor() {
    this.sensorStore = this.createSensorStore()
    this.sessionStore = this.createSessionStore()
    this.userStore = this.createUserStore()

    this.setupConnections()
  }

  load = useAsyncState(async () => {
    await this.sensorStore.load()
    await this.userStore.load()
  })

  private createSensorStore() {
    return new SensorStore()
  }

  private createSessionStore() {
    return new SessionStore()
  }

  private createUserStore() {
    return new UserStore()
  }

  private setupConnections() {
    reaction(
      () => this.sessionStore.isValid, 
      (isValid) => {
        delete http.options.headers.Authorization

        if (isValid) {
          http.options.headers.Authorization = "Bearer " + this.sessionStore.session.token

          void this.load()
        }
      },
      { fireImmediately: true }
    )
  }
}