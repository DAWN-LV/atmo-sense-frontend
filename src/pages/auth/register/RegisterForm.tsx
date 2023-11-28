import { useForm, FormProvider } from "react-hook-form"
import { useAuth } from "@/pages/auth/useAuth"
import TextField from "@/components/form/TextField"
import PasswordField from "@/components/form/PasswordField"
import Button from "@/components/Button"
import { useNotification } from "@/store/notification/provider"
import { Link } from "react-router-dom"

interface FormData {
  email: string
  username: string
  password: string
  repeat_password: string
}

const RegisterForm: React.FC = () => {
  const notification = useNotification()
  const methods = useForm<FormData>()
  const { register } = useAuth()

  const onSubmit = async ({ email, username, password, repeat_password }: FormData) => {
    if (password !== repeat_password) {
      return void notification.add({
        type: "error",
        title: "Registration Failed",
        message: "The passwords do not match. Please try again.",
      })
    }

    await register(email, username, password)
    notification.add({
      type: "success",
      title: "Registration Successful",
      message: "Welcome! Your account has been successfully created.",
    })
  }

  return (
    <FormProvider { ...methods }>
      <form onSubmit={ methods.handleSubmit(onSubmit) }>
        <TextField name="username" label="Username"/>
        <TextField name="email" label="Email"/>
        <PasswordField name="password" label="Password"/>
        <PasswordField name="repeat_password" label="Repeat Password"/>
        <Button type="submit" variant="primary" label="Sign in"/>
        <div className="flex items-center justify-center mt-5">
          Already have an account?<Link to="auth/login" className="text-blue-600">Log in</Link>
        </div>
      </form>
    </FormProvider>
  )
}

export default RegisterForm