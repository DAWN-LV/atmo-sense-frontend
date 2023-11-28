import { useForm, FormProvider } from "react-hook-form"
import { useAuth } from "@/pages/auth/useAuth"
import TextField from "@/components/form/TextField"
import PasswordField from "@/components/form/PasswordField"
import Button from "@/components/Button"
import { useNotification } from "@/store/notification/provider"

interface FormData {
  email: string
  password: string
}

const LoginForm: React.FC = () => {
  const notification = useNotification()
  const methods = useForm<FormData>()
  const { login } = useAuth()

  const onSubmit = async ({ email, password }: FormData) => {
    await login(email, password)
    notification.add({
      type: "success",
      title: "Login Successful",
      message: "Welcome! You have successfully logged into your account.",
    })
  }

  return (
    <FormProvider { ...methods }>
      <form onSubmit={ methods.handleSubmit(onSubmit) }>
        <TextField name="email" label="Email"/>
        <PasswordField name="password" label="Password"/>
        <Button type="submit" variant="primary" label="Sign in"/>
      </form>
    </FormProvider>
  )
}

export default LoginForm