import { Reducer } from "redux";
import { SensorProps } from "../../models/sensorProps";
import { SensorReducerEnum } from "./ActionsType";


type SensorReducerType = {
    sensors: SensorProps[];
}

const defaultState: SensorReducerType = {
    sensors: [],
}

const sensorReducer: Reducer<SensorReducerType> = (
    state = defaultState,
    action
) => {
    switch(action.type){
        case SensorReducerEnum.Set_Sensors: 
        return {...state, sensors: action.sensorStorage}
        default:
            return {...state};
    }
}

export default sensorReducer;