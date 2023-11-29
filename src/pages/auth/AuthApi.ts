import { http } from "@/globals"
import { SessionDTO } from "@/store/session/types"

export default abstract class AuthApi {
  static async login(email: string, password: string) {
    try {
      const dto = await http.post<SessionDTO>('auth/login', { email, password })
      return AuthApi.handleSuccess(dto)
    } catch (error) {
      AuthApi.handleError(error)
    }
  }

  static async register(email: string, username: string, password: string) {
    try {
      const dto = await http.post<SessionDTO>('auth/register', { email, username, password })
      return AuthApi.handleSuccess(dto)
    } catch (error) {
      AuthApi.handleError(error)
    }
  }

  private static handleSuccess(dto: SessionDTO): SessionDTO {
    return {
      expiresAt: Number(dto.expiresAt),
      token: String(dto.token)
    }
  }

  private static handleError(error: any): never {
    // TODO: Exceptions

    throw error
  }
}