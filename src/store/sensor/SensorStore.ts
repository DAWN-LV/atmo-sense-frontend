import Dictionary from "@/plugin/dictionary/Dictionary"
import SensorModel from "@/store/sensor/SensorModel"
import useAsyncState from "@/hooks/mobx/useAsyncState"
import SensorApi from "@/store/sensor/SensorApi"
import { CreateSensorDTO, SensorDTO } from "@/store/sensor/types"

export default class SensorStore {
  readonly sensors = new Dictionary<number, SensorModel>()

  load = useAsyncState(async () => {
    const sensors = await SensorApi.fetchAll()
    this.sensors.clear()
    sensors.forEach(sensor => this.setSensor(sensor))
  })

  async create(dto: CreateSensorDTO) {
    const sensor = await SensorApi.create(dto)
    return this.setSensor(sensor)
  }

  private setSensor(dto: SensorDTO) {
    const sensor = new SensorModel(dto)
    this.sensors.set(sensor.id, sensor)
    return sensor
  }
}