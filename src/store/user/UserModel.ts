import { UserDTO } from "@/store/user/types"
import { makeAutoObservable } from "mobx"

export default class UserModel {
  readonly email
  readonly username
  readonly avatar

  constructor(dto: UserDTO) {
    this.email = dto.email
    this.username = dto.username
    this.avatar = dto.avatar

    makeAutoObservable(this)
  }
}