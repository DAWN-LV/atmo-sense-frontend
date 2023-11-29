import { useAppStore } from "@/providers/internal/AppStoreProvider"
import AuthApi from "@/pages/auth/AuthApi"


export function useAuth() {
  const { sessionStore } = useAppStore()
  
  return {
    async login(email: string, password: string) {
      const dto = await AuthApi.login(email.toLowerCase(), password)
      sessionStore.authenticate(dto)
    },
    async register(email: string, username: string, password: string) {
      const dto = await AuthApi.register(email.toLowerCase(), username.toLocaleLowerCase(), password)
      sessionStore.authenticate(dto)
    }
  }
}