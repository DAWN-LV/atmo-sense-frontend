import { ThunkResult } from "store/type"
import { SensorActionTypes } from "./type"
import Status from "models/Status"


export const fetchSensors = (): ThunkResult<void> => {
    return async (dispatch) => {
        try {
            dispatch({ type: SensorActionTypes.SET_SENSORS_LOADING, payload: true })
            dispatch({ type: SensorActionTypes.SET_SENSORS, payload: [] })
            dispatch({ type: SensorActionTypes.SET_SENSORS_STATUS, payload: new Status(200) })
        } catch (err) {
            console.log(err)
            
            dispatch({ type: SensorActionTypes.SET_SENSORS_STATUS, payload: new Status(400, 'fetchSensors error') })
        } finally {
            dispatch({ type: SensorActionTypes.SET_SENSORS_LOADING, payload: false })
        }
    }
}