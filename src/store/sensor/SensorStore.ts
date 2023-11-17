import Dictionary from "@/plugin/dictionary/Dictionary"
import SensorModel from "@/store/sensor/SensorModel"
import useAsyncState from "@/hooks/useAsyncState"
import SensorApi from "@/store/sensor/SensorApi"
import { SensorDTO } from "@/store/sensor/types"

export default class SensorStore {
  readonly sensors = new Dictionary<number, SensorModel>()

  constructor() {}

  load = useAsyncState(async () => {
    const sensors = await SensorApi.fetchAll()
    this.sensors.clear()
    sensors.forEach(sensor => this.setSensor(sensor))
  })

  private setSensor(dto: SensorDTO) {
    const sensor = new SensorModel(dto)
    this.sensors.set(sensor.id, sensor)
    return sensor
  }
}