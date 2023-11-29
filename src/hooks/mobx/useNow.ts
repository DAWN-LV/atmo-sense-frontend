import { observable, runInAction } from 'mobx'

interface Options {
  interval: number
}

export const useNow = ({ interval }: Options) => {
  const time = observable({ current: Date.now() })

  setInterval(() => {
    runInAction(() => {
      time.current = Date.now()
    })
  }, interval)

  return time
}