import { ThunkAction } from 'redux-thunk';
import { AppStateType } from './store';
import { SensorsActionTypes } from './sensors/type';

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

type AppActions = SensorsActionTypes

export type ThunkResult<R> = ThunkAction<Promise<R>, AppStateType, unknown, AppActions>
