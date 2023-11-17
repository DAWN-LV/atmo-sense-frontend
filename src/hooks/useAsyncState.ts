import { observable } from "mobx"

interface State {
  state: 'idle' | 'pending' | 'fulfilled' | 'rejected'
  readonly isIdle: boolean
  readonly isPending: boolean
  readonly isFulfilled: boolean
  readonly isRejected: boolean
}

export default function useAsyncState<T extends (...args: any[]) => Promise<any>>(fn: T) {
  const state = observable<State>({
    state: 'idle',
    get isIdle() {
      return this.state === 'idle'
    },
    get isPending() {
      return this.state === 'pending'
    },
    get isFulfilled() {
      return this.state === 'fulfilled'
    },
    get isRejected() {
      return this.state === 'rejected'
    },
  })

  return new Proxy(fn, {
    get(target: T, prop: keyof State) {
      if (prop in state) {
        return state[prop]
      }
    },
    has(target: T, prop: keyof State) {
      return prop in state
    },
    apply(target: T, thisArg: any, argArray: any[]): any {
      state.state = 'pending'

      return target.apply(thisArg, argArray)
        .then(result => {
          state.state = 'fulfilled'
          return result
        })
        .catch(error => {
          state.state = 'rejected'
          throw error
        })
    },
  }) as T & Readonly<State>
}
