import { Reducer } from "redux"
import { ISensorStore, SensorsActionTypes, SensorActionTypes } from "./type"
import Status from "models/Status"

const initialState: ISensorStore = {
    sensors: [],
    isLoading: false,
    status: new Status()
}

const sensorReducer: Reducer<ISensorStore, SensorsActionTypes> = (
    state = initialState,
    action
) => {
    switch(action.type){
        case SensorActionTypes.SET_SENSORS: 
            return { ...state, sensors: action.payload }
        default:
            return { ...state }
    }
}

export default sensorReducer
