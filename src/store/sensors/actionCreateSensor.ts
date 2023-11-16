import { http } from "../../globals";
import { createStatus } from "../../utils/storeUtils";
import { ThunkResult } from "../type";
import { SensorActionTypes } from "./type";
type NewSensor = Pick<ISensor, "ip" | "name">;

export const createNewSensor = (
  newSensorData: NewSensor
): ThunkResult<void> => {
  return async (dispatch, getState) => {
    const { sensors } = getState().sensorReducer;
    try {
      dispatch({
        type: SensorActionTypes.SET_SENSORS_LOADING,
        payload: true,
      });

      const payload = await http
        .post<NewSensor>("sensors")
        .withBody(newSensorData)
        .send();
      console.log(payload, "payload");
      const updatedSensors = [...sensors, payload];
      dispatch({
        type: SensorActionTypes.SET_SENSORS,
        payload: updatedSensors,
      });
      dispatch({
        type: SensorActionTypes.SET_SENSORS_STATUS,
        payload: createStatus({ code: 200 }),
      });
    } catch (err) {
      dispatch({
        type: SensorActionTypes.SET_SENSORS_STATUS,
        payload: createStatus({ code: 400 }),
      });
    } finally {
      dispatch({
        type: SensorActionTypes.SET_SENSORS_LOADING,
        payload: false,
      });
    }
  };
};
