import { useAppStore } from '@/store/provider'
import AuthApi from "@/pages/auth/AuthApi"


export function useAuth() {
  const { sessionStore } = useAppStore()
  
  return {
    async login(email: string, password: string) {
      const dto = await AuthApi.login(email.toLowerCase(), password)
      sessionStore.authenticate(dto)
    }
  }
}