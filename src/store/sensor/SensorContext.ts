import useAsyncState from "@/hooks/mobx/useAsyncState"
import SensorStore from "@/store/sensor/sensors/SensorStore"
import GroupStore from "@/store/sensor/groups/GroupStore"
import ConfigStore from "@/store/sensor/config/ConfigStore"

export default class SensorContext {
  readonly sensorStore
  readonly groupStore
  readonly configStore

  constructor() {
    this.sensorStore = this.createSensorStore()
    this.groupStore = this.createGroupStore()
    this.configStore = this.createConfigStore()
  }

  load = useAsyncState(async () => {
    await Promise.all([
      this.sensorStore.load(),
      this.groupStore.load(),
      this.configStore.load()
    ])
  })

  listenSubscription() {
    this.sensorStore.listenSubscription()
    this.groupStore.listenSubscription()
  }

  private createConfigStore() {
    return new ConfigStore()
  }

  private createSensorStore() {
    return new SensorStore()
  }

  private createGroupStore() {
    return new GroupStore(this)
  }
}