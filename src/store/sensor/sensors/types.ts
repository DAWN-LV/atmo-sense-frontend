export type SensorType = "CO2" | "GAS" | "MOTION" | "TEMPERATURE" | "PRESSURE" | "SMOKE"
export type SensorStatus = "ACTIVE" | "INACTIVE" | "RESTARTING"

export interface SensorDTO {
  id: number
  name: string
  color?: string
  status: SensorStatus
  ip: string
  mac: string
  gpioPin: number
  type: SensorType
  ownerId: number

  updatedAt: string
  createdAt: string
}

export type SensorDataDTO = [number, number, number, number]

export interface CreateSensorDTO {
  name: string
  mac: string
  color?: string
  gpioPin: number
  type: SensorType
  status: SensorStatus
}

export interface UpdateSensorDTO {
  name: string
  color?: string
  type?: SensorType
  gpioPin?: number
}