import useAsyncState from "@/hooks/mobx/useAsyncState"
import SensorStore from "@/store/sensor/SensorStore"
import SessionStore from "./session/SessionStore"

export default class AppStore {
  readonly sensorStore
  readonly sessionStore
  
  constructor() {
    this.sensorStore = this.createSensorStore()
    this.sessionStore = this.createSessionStore()

    this.setupConnections()
  }

  load = useAsyncState(async () => {
    await this.sensorStore.load()
  })

  private createSensorStore() {
    return new SensorStore()
  }

  private createSessionStore() {
    return new SessionStore()
  }

  private setupConnections() {
    // TODO: Set user token to HttpClient

    void this.load()
  }
}