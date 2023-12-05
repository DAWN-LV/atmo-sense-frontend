import { SensorDTO } from "@/store/sensor/types"
import { makeAutoObservable } from "mobx"
import SensorApi from "@/store/sensor/SensorApi"
import SensorStore from "@/store/sensor/SensorStore"

export default class SensorModel {
  readonly id: number
  readonly data

  constructor(
    private readonly store: SensorStore,
    dto: SensorDTO
  ) {
    this.id = dto.id
    this.data = dto

    makeAutoObservable(this)
  }

  async delete() {
    await SensorApi.delete(this.id)
    this.store.sensors.delete(this.id)
  }
}