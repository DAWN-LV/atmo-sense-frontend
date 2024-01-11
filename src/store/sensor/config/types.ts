export type SensorTypes = "CO2" | "GAS" | "MOTION" | "TEMPERATURE" | "PRESSURE" | "SMOKE"
export interface SensorTemplateDTO {
  id: number
  type: SensorTypes
  threshold: number | undefined
  min: number
  max: number
}