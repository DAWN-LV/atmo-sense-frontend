import { SensorDTO, UpdateSensorDTO } from "@/store/sensor/sensors/types"
import { makeAutoObservable } from "mobx"
import SensorApi from "@/store/sensor/sensors/SensorApi"
import SensorStore from "@/store/sensor/sensors/SensorStore"
import useAsyncState from "@/hooks/mobx/useAsyncState"

export default class SensorModel {
  readonly id: number
  readonly data

  constructor(readonly store: SensorStore, dto: SensorDTO) {
    this.id = dto.id
    this.data = dto

    makeAutoObservable(this)
  }

  play = useAsyncState(async () => await SensorApi.play(this.data.mac))
  pause = useAsyncState(async () => await SensorApi.pause(this.data.mac))
  restart = useAsyncState(async () => await SensorApi.restart(this.data.mac))

  get template() {
    return this.store.context.configStore.templates.values.find(template => template.data.type === this.data.type)
  }

  get name() {
    return this.data.name.trim().toLocaleLowerCase()
  }

  async delete() {
    await SensorApi.delete(this.id)
    this.store.sensors.delete(this.id)
  }

  async update(dto: UpdateSensorDTO) {
    await SensorApi.update(this.id, dto)
  }

  actualize(dto: SensorDTO) {
    Object.assign(this.data, dto)
  }
}