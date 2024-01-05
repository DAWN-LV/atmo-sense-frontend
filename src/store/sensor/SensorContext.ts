import useAsyncState from "@/hooks/mobx/useAsyncState"
import SensorStore from "@/store/sensor/sensors/SensorStore"
import GroupStore from "@/store/sensor/groups/GroupStore"
import AppStore from "@/store/AppStore"

export default class SensorContext {
  readonly sensorStore
  readonly groupStore

  constructor() {
    this.sensorStore = this.createSensorStore()
    this.groupStore = this.createGroupStore()
  }

  load = useAsyncState(async () => {
    await Promise.all([
      this.sensorStore.load(),
      this.groupStore.load()
    ])
  })

  private createSensorStore() {
    return new SensorStore()
  }

  private createGroupStore() {
    return new GroupStore(this)
  }
}