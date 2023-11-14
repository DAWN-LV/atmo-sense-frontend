import { Reducer } from "redux"
import { ISensorStore, SensorsActionTypes, SensorActionTypes } from "./type"
import { createStatus } from "../../utils/storeUtils"

const initialState: ISensorStore = {
    sensors: [],
    isLoading: false,
    status: createStatus({ code: 0 })
}

const sensorReducer: Reducer<ISensorStore, SensorsActionTypes> = (
    state = initialState,
    action
) => {
    switch(action.type){
        case SensorActionTypes.SET_SENSORS: return { ...state, sensors: action.payload }
        case SensorActionTypes.SET_SENSORS_LOADING: return { ...state, isLoading: action.payload }
        case SensorActionTypes.SET_SENSORS_STATUS: return { ...state, status: action.payload }
        default: return { ...state }
    }
}

export default sensorReducer
