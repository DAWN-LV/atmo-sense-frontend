import UserModel from "@/store/user/UserModel"
import useAsyncState from "@/hooks/mobx/useAsyncState"
import UserApi from "@/store/user/UserApi"
import { UserDTO } from "@/store/user/types"
import { makeAutoObservable } from "mobx"
import { assertDefined } from "@/utils"

export default class UserStore {
  private _user: UserModel | undefined = undefined

  constructor() {
    makeAutoObservable(this)
  }

  load = useAsyncState(async () => {
    const user = await UserApi.fetchOne()
    this.setUser(user)
  })

  get user() {
    return assertDefined(this._user, "Can not get user. You are not authenticated.")
  }

  private setUser(dto: UserDTO) {
    this._user = new UserModel(dto)
  }
}