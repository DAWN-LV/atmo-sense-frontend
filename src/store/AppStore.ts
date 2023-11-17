import useAsyncState from "@/hooks/useAsyncState"
import SensorStore from "@/store/sensor/SensorStore"

export default class AppStore {
  readonly sensorStore
  
  constructor() {
    this.sensorStore = this.createSensorStore()

    this.setupConnections()
  }

  load = useAsyncState(async () => {
    await this.sensorStore.load()
  })

  private createSensorStore() {
    return new SensorStore()
  }

  private setupConnections() {
    // TODO: Set user token to HttpClient

    void this.load()
  }
}