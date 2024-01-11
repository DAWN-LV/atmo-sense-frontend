import { http } from "@/globals"
import { SensorTemplateDTO } from "@/store/sensor/config/types"

export default abstract class ConfigApi {
  static async fetchTypes() {
    return http.get<string[]>("sensors/types")
  }

  static async fetchTemplates() {
    return http.get<SensorTemplateDTO[]>("sensors/templates")
  }
}