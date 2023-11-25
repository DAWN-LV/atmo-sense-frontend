import SessionModel from "@/store/session/SessionModel"
import { assertDefined } from "@/utils"
import { makeAutoObservable } from "mobx"
import { SessionDTO } from "./types"
import { cacheIn, cacheOut } from "@/plugin/decorators/cache"

export default class SessionStore {
  private _session: SessionModel | undefined = undefined

  constructor() {
    makeAutoObservable(this)
  }

  get session() {
    return assertDefined(this._session, 'Can not get session. You are not authenticated.')
  }

  authenticate(dto: SessionDTO) {
    this._session = new SessionModel(dto)
  }

  @cacheOut('Session')
  private restoreCache(json: SessionDTO) {
    this.authenticate(json)
  }

  @cacheIn('Session')
  private saveCache() {
    return this._session?.toJSON()
  }
}