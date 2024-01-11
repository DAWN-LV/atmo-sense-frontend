import Dictionary from "@/plugin/dictionary/Dictionary"
import SensorModel from "@/store/sensor/sensors/SensorModel"
import useAsyncState from "@/hooks/mobx/useAsyncState"
import SensorApi from "@/store/sensor/sensors/SensorApi"
import { CreateSensorDTO, SensorDTO } from "@/store/sensor/sensors/types"
import SensorSubscription from "@/store/sensor/sensors/SensorSubscription"
import { makeAutoObservable } from "mobx"
import SensorContext from "@/store/sensor/SensorContext"

export default class SensorStore {
  private subscription = new SensorSubscription()
  readonly sensors = new Dictionary<number, SensorModel>()

  constructor(readonly context: SensorContext) {
    makeAutoObservable(this)
  }

  load = useAsyncState(async () => {
    const sensors = await SensorApi.fetchAll()
    this.sensors.clear()
    sensors.forEach(sensor => this.setSensor(sensor))
  })
  
  get count() {
    return this.sensors.size
  }
  
  async loadOne(id: number) {
    const dto = await SensorApi.fetchOne(id)

    if (this.sensors.has(id)) {
      const model = this.sensors.get(id)
      model.actualize(dto)
    } else {
      this.setSensor(dto)
    }
  }

  async create(dto: CreateSensorDTO) {
    const sensor = await SensorApi.create(dto)
    return this.setSensor(sensor)
  }

  listenSubscription() {
    this.subscription.onCreate(id => this.loadOne(id))
    this.subscription.onUpdate(id => this.loadOne(id))
    this.subscription.onDelete(id => this.sensors.delete(id))
  }

  private setSensor(dto: SensorDTO) {
    const sensor = new SensorModel(this, dto)
    this.sensors.set(sensor.id, sensor)
    return sensor
  }
}