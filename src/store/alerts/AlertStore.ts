import { makeAutoObservable } from "mobx"
import AlertModel from "@/store/alerts/AlertModel"
import { AlertDTO } from "./types"

export default class AlertStore {
  readonly alerts = new Set<AlertModel>()

  constructor() {
    makeAutoObservable(this)
  }

  get active() {
    return Array.from(this.alerts.values()).filter(alert => alert.isActive)
  }

  add(dto: AlertDTO) {
    this.alerts.add(new AlertModel(this, dto))
  }
}