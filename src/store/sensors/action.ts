import { http } from "../../globals"
import { createStatus } from "../../utils/storeUtils"
import { ThunkResult } from "../type"
import { SensorActionTypes } from "./type"

export const fetchSensors = (): ThunkResult<void> => {
    return async (dispatch) => {
        try {
            dispatch({ type: SensorActionTypes.SET_SENSORS_LOADING, payload: true })

            const payload = await http.get<Array<ISensor>>('sensors').send()

            dispatch({ type: SensorActionTypes.SET_SENSORS, payload })
            dispatch({ type: SensorActionTypes.SET_SENSORS_STATUS, payload: createStatus({ code: 200 }) })
        } catch (err) {            
            dispatch({ type: SensorActionTypes.SET_SENSORS_STATUS, payload: createStatus({ code: 400 }) })
        } finally {
            dispatch({ type: SensorActionTypes.SET_SENSORS_LOADING, payload: false })
        }
    }
}
