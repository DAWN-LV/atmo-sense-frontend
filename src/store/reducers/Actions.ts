import { Dispatch } from "react";
import { SensorProps } from "../../models/sensorProps";
import { SensorReducerEnum } from "./ActionsType";
import { AnyAction } from "redux";
import { getSensors } from "../../api/services/sensorService/service";

export const setSensors = (sensorStorage: SensorProps[]) => {
  return { type: SensorReducerEnum.Set_Sensors, sensorStorage };
};

export const getSensorsToStore = () => {
  return async (dispatch: Dispatch<AnyAction>) => {
    const [dataOfSensors] = await Promise.all([getSensors()]);
    dispatch(setSensors(dataOfSensors))
  }
}