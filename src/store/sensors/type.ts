import { SetBoolean, SetStatus } from "store/type"

export enum SensorActionTypes {
    SET_SENSORS = "SET_SENSORS",
    SET_SENSORS_LOADING = "SET_SENSORS_LOADING",
    SET_SENSORS_STATUS = "SET_SENSORS_STATUS"
}

export interface ISensorStore {
    sensors: Array<ISensor>
    isLoading: boolean
    status: IStatus
}

type SetSensorsType = { type: SensorActionTypes.SET_SENSORS, payload: Array<ISensor> }
type SetSensorsLoadingType = SetBoolean<SensorActionTypes.SET_SENSORS_LOADING>
type SetSensorsStatusType = SetStatus<SensorActionTypes.SET_SENSORS_STATUS>

type SensorActions = SetSensorsType | SetSensorsLoadingType | SetSensorsStatusType

export type SensorsActionTypes = SensorActions
