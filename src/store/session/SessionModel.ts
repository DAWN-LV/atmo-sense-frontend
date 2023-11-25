import { makeAutoObservable } from "mobx"
import { SessionDTO } from "@/store/session/types"
import { useNow } from "@/hooks/mobx/useNow"

export default class SessionModel {
  readonly userId
  readonly token
  readonly expiresAt

  private readonly now = useNow({ interval: 1000 })

  constructor(dto: SessionDTO) {
    this.userId = dto.userId
    this.token = dto.token
    this.expiresAt = dto.expiresAt

    makeAutoObservable(this)
  }

  get isValid() {
    return this.now < this.expiresAt
  }

  toJSON(): SessionDTO {
    return {
      userId: this.userId,
      token: this.token,
      expiresAt: this.expiresAt
    }
  }
}