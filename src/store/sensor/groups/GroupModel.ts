import { makeAutoObservable } from "mobx"
import { GroupDTO, UpdateGroupDTO } from "@/store/sensor/groups/types"
import SensorContext from "@/store/sensor/SensorContext"
import GroupApi from "@/store/sensor/groups/GroupApi"
import NotificationApi from "@/features/notifications/NotificationApi"

export default class GroupModel {
  readonly id: number
  readonly data

  constructor(readonly context: SensorContext, dto: GroupDTO) {
    this.id = dto.id
    this.data = dto

    makeAutoObservable(this)
  }

  get sensors() {
    return this.context.sensorStore.sensors.values.filter(sensor => (
      this.data.sensors?.find(item => item.id === sensor.id)
    ))
  }

  async share(email: string) {
    await NotificationApi.create({
      email: email,
      type: "GROUP:INVITATION",
      data: JSON.stringify({
        groupId: this.id,
        groupName: this.data.name,
      })
    })
  }

  async delete() {
    await GroupApi.delete(this.id)
    this.context.groupStore.groups.delete(this.id)
  }

  async update(dto: UpdateGroupDTO) {
    await GroupApi.update(this.id, dto)
  }

  actualize(dto: GroupDTO) {
    Object.assign(this.data, dto)
  }
}