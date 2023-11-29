import { SensorDTO } from "@/store/sensor/types"
import { makeAutoObservable } from "mobx"

export default class SensorModel {
  readonly id: number
  readonly data

  constructor(dto: SensorDTO) {
    this.id = dto.id
    this.data = dto

    makeAutoObservable(this)
  }
}