import { makeAutoObservable } from "mobx"
import useAsyncState from "@/hooks/mobx/useAsyncState"
import Dictionary from "@/plugin/dictionary/Dictionary"
import GroupModel from "@/store/sensor/groups/GroupModel"
import GroupApi from "@/store/sensor/groups/GroupApi"
import { CreateGroupDTO, GroupDTO } from "@/store/sensor/groups/types"
import SensorContext from "@/store/sensor/SensorContext"
import GroupSubscription from "@/store/sensor/groups/GroupSubscription"

export default class GroupStore {
  private subscription = new GroupSubscription()
  readonly groups = new Dictionary<number, GroupModel>()

  constructor(readonly context: SensorContext) {
    makeAutoObservable(this)
  }

  load = useAsyncState(async () => {
    const groups = await GroupApi.fetchAll()
    this.groups.clear()
    groups.forEach(group => this.setGroup(group))
  })

  get count() {
    return this.groups.size
  }

  get ungrouped() {
    const items = this.groups.values.map(group => group.data.sensors || []).flat()

    return this.context.sensorStore.sensors.values.filter(sensor => {
      return !items.some(item => sensor.id === item.id)
    })
  }

  get grouped() {
    const items = this.groups.values.map(group => group.data.sensors || []).flat()

    return this.context.sensorStore.sensors.values.filter(sensor => {
      return items.some(item => sensor.id === item.id)
    })
  }

  async loadOne(id: number) {
    const dto = await GroupApi.fetchOne(id)

    if (this.groups.has(id)) {
      const model = this.groups.get(id)
      model.actualize(dto)
    } else {
      this.setGroup(dto)
    }
  }

  async create(dto: CreateGroupDTO) {
    const group = await GroupApi.create(dto)
    return this.setGroup(group)
  }

  listenSubscription() {
    this.subscription.onCreate(id => this.loadOne(id))
    this.subscription.onUpdate(id => this.loadOne(id))
    this.subscription.onDelete(id => this.groups.delete(id))
  }

  private setGroup(dto: GroupDTO) {
    const group = new GroupModel(this.context, dto)
    this.groups.set(group.id, group)
    return group
  }
}