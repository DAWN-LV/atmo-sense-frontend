import { makeAutoObservable } from "mobx"
import SessionModel from "@/store/session/SessionModel"
import { SessionDTO } from "@/store/session/types"
import LocalStorage from "@/plugin/LocalStorage"
import { assertDefined } from "@/utils"
import config from "@/config"

const cache = new LocalStorage(localStorage, config.app.title)

export default class SessionStore {
  private _session: SessionModel | undefined = undefined

  constructor() {
    makeAutoObservable(this)

    this.restoreCache()
  }

  get session() {
    return assertDefined(this._session, "Can not get session. You are not authenticated.") 
  }

  get isValid() {
    return !!this._session?.isValid
  }

  authenticate(dto: SessionDTO) {
    this._session = new SessionModel(dto)
    this.saveCache()
  }

  // TODO: Not Safe - Add backend side to logout
  logout() {
    this._session = undefined
    cache.remove('session')
  }

  private restoreCache() {
    const json = cache.get<SessionDTO>("session")
    if (json) {
      this.authenticate(json)
    }
  }

  private saveCache() {
    if (this._session) {
      cache.set("session", this._session.toJSON())
    }
  }
}
