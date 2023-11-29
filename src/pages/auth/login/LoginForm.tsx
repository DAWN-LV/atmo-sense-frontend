import { Link } from "react-router-dom"
import { useForm, FormProvider } from "react-hook-form"
import { useAuth } from "@/pages/auth/useAuth"
import Button from "@/components/Button"
import { useNotification } from "@/providers"
import { PasswordField, TextField } from "@/components/form"

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
        <div className="flex justify-center mt-5">
          Don't have an account?<Link to="/auth/register" className="text-blue-600">Register</Link>
        </div>
      </form>
    </FormProvider>
  )
}

export default LoginForm