import { http } from "@/globals"
import { UserDTO } from "@/store/user/types"

export default abstract class UserApi {
  static async fetchOne() {
    return http.get<UserDTO>("users")
  }
}