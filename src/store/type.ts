import { ThunkAction } from 'redux-thunk';
import { AppStateType } from './store';
import { SensorsActionTypes } from './sensors/type';
import { NewSensorsActionTypes } from './createSensor/type';

export interface SetBoolean<T> {
    type: T
    payload: boolean
}

// export interface SetNumber<Type> {
//     type: Type
//     payload: number
// }

export interface SetStatus<T> {
    type: T
    payload: IStatus
}

type AppActions = SensorsActionTypes | NewSensorsActionTypes

export type ThunkResult<R> = ThunkAction<Promise<R>, AppStateType, unknown, AppActions>
