import { makeAutoObservable } from "mobx"
import { SensorDTO } from "./types"

export default class SensorModel {
  readonly id: number
  readonly data

  constructor(dto: SensorDTO) {
    this.id = dto.id
    this.data = dto

    makeAutoObservable(this)
  }
}