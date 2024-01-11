import { SensorTemplateDTO } from "@/store/sensor/config/types"

export default class TemplateModule {
  readonly id
  readonly data

  constructor(dto: SensorTemplateDTO) {
    this.id = dto.id
    this.data = dto
  }
}