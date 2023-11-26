import SessionModel from "@/store/session/SessionModel"
import { makeAutoObservable } from "mobx"
import { SessionDTO } from "@/store/session/types"
import LocalStorage from "@/plugin/LocalStorage"
import config from "@/config"

const cache = new LocalStorage(localStorage, config.app.title);

export default class SessionStore {
  private _session: SessionModel | undefined = undefined

  constructor() {
    makeAutoObservable(this)

    this.restoreCache()
  }

  get session() {
    return this._session
  }

  authenticate(dto: SessionDTO) {
    this._session = new SessionModel(dto)
    this.saveCache()
  }

  private restoreCache() {
    const json = cache.get<SessionDTO>('session')
    if (json) {
      this.authenticate(json)
    }
  }

  private saveCache() {
    if (this._session) {
      cache.set('session', this._session.toJSON())
    }
  }
}
