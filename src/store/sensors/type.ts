import { SetBoolean, SetStatus } from "../type"
type NewSensor = Pick<ISensor, "ip" | "name">;

export enum SensorActionTypes {
    SET_SENSORS = "SET_SENSORS",
    SET_NEW_SENSOR = "SET_NEW_SENSOR",
    SET_SENSORS_LOADING = "SET_SENSORS_LOADING",
    SET_SENSORS_STATUS = "SET_SENSORS_STATUS"
}

export interface ISensorStore {
    sensors: Array<ISensor>
    newsensor: Array<NewSensor>
    isLoading: boolean
    status: IStatus
}

type SetSensorsType = { type: SensorActionTypes.SET_SENSORS, payload: Array<ISensor> }
type SetNewSensorType = { type: SensorActionTypes.SET_NEW_SENSOR, payload: Array<NewSensor> };
type SetSensorsLoadingType = SetBoolean<SensorActionTypes.SET_SENSORS_LOADING>
type SetSensorsStatusType = SetStatus<SensorActionTypes.SET_SENSORS_STATUS>

type SensorActions = SetSensorsType | SetNewSensorType | SetSensorsLoadingType | SetSensorsStatusType

export type SensorsActionTypes = SensorActions
