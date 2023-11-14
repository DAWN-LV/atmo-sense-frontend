import { http } from "../../globals"
import { getStatus } from "../../utils/storeUtils"
import { ThunkResult } from "../type"
import { SensorActionTypes } from "./type"

export const fetchSensors = (): ThunkResult<void> => {
    return async (dispatch) => {
        try {
            dispatch({ type: SensorActionTypes.SET_SENSORS_LOADING, payload: true })
            const res = await http.get<Array<ISensor>>('sensors').send()

            dispatch({ type: SensorActionTypes.SET_SENSORS, payload: res })
            dispatch({ type: SensorActionTypes.SET_SENSORS_STATUS, payload: getStatus({ code: 200 }) })
        } catch (err) {
            console.log(err)
            
            dispatch({ type: SensorActionTypes.SET_SENSORS_STATUS, payload: getStatus({ code: 400 }) })
        } finally {
            dispatch({ type: SensorActionTypes.SET_SENSORS_LOADING, payload: false })
        }
    }
}