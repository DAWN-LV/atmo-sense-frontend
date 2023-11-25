import SessionModel from "@/store/session/SessionModel"
import { makeAutoObservable } from "mobx"
import { SessionDTO } from "./types"
import { cacheIn, cacheOut } from "@/plugin/decorators/cache"

export default class SessionStore {
  private _session: SessionModel | undefined = undefined

  constructor() {
    makeAutoObservable(this)
  }

  get session() {
    return this._session
  }

  authenticate(dto: SessionDTO) {
    this._session = new SessionModel(dto)
  }

  // @cacheOut('Session')
  // private restoreCache(json: SessionDTO) {
  //   this.authenticate(json)
  // }

  // @cacheIn('Session')
  // private saveCache() {
  //   return this._session?.toJSON()
  // }
}
