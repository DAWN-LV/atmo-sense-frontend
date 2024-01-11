import useAsyncState from "@/hooks/mobx/useAsyncState"
import Dictionary from "@/plugin/dictionary/Dictionary"
import TemplateModule from "@/store/sensor/config/TemplateModel"
import ConfigApi from "@/store/sensor/config/ConfigApi"
import { SensorTemplateDTO } from "@/store/sensor/config/types"
import { makeAutoObservable } from "mobx"

export default class ConfigStore {
  readonly templates = new Dictionary<number, TemplateModule>()

  constructor() {
    makeAutoObservable(this)
  }

  load = useAsyncState(async () => {
    this.templates.clear()

    const templates = await ConfigApi.fetchTemplates()
    templates.forEach(template => this.setTemplate(template))
  })

  get types() {
    return this.templates.map(template => template.data.type)
  }

  private setTemplate(dto: SensorTemplateDTO) {
    const template = new TemplateModule(dto)
    this.templates.set(template.id, template)
    return template
  }
}