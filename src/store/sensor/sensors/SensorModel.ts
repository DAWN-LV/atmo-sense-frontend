import { SensorDTO, UpdateSensorDTO } from "@/store/sensor/sensors/types"
import { makeAutoObservable } from "mobx"
import SensorApi from "@/store/sensor/sensors/SensorApi"
import SensorStore from "@/store/sensor/sensors/SensorStore"

export default class SensorModel {
  readonly id: number
  readonly data

  constructor(readonly store: SensorStore, dto: SensorDTO) {
    this.id = dto.id
    this.data = dto

    makeAutoObservable(this)
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