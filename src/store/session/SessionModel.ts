import { makeAutoObservable } from "mobx"
import { SessionDTO } from "@/store/session/types"
import { useNow } from "@/hooks/mobx/useNow"

export default class SessionModel {
  readonly token
  readonly expiresAt

  public readonly now = useNow({ interval: 1000 })

  constructor(dto: SessionDTO) {
    this.token = dto.token
    this.expiresAt = dto.expiresAt

    makeAutoObservable(this)
  }

  get expiresIn() {
    return this.expiresAt - Date.now()
  }

  get isValid() {
    return this.now.current < this.expiresAt
  }

  toJSON(): SessionDTO {
    return {
      token: this.token,
      expiresAt: this.expiresAt
    }
  }
}