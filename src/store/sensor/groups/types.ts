export interface GroupDTO {
  id: number
  name: string
  sensors?: Array<{ id: number, type: string }>
}

export interface CreateGroupDTO {
  name: string
  sensorIds?: string
}

export interface UpdateGroupDTO {
  name: string
  sensorIds?: string
}