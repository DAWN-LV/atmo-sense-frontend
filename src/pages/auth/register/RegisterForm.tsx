import { Link } from "react-router-dom"
import { useAuth } from "@/pages/auth/useAuth"
import Button from "@/components/Button"
import { PasswordField, TextField, Form } from "@/components/form"
import { useAlert } from "@/providers"

interface FormData {
  email: string
  username: string
  password: string
  repeat_password: string
}

const RegisterForm: React.FC = () => {
  const alert = useAlert()
  const { register } = useAuth()

  const onSubmit = async ({ email, username, password, repeat_password }: FormData) => {
    if (password !== repeat_password) {
      return void alert.add({
        category: "error",
        content: "The passwords do not match. Please try again.",
      })
    }

    await register(email, username, password)
    alert.add({
      category: "success",
      content: "Welcome! Your account has been successfully created.",
    })
  }

  return (
    <Form onSubmit={ onSubmit }>
      <TextField name="username" label="Username"/>
      <TextField name="email" label="Email"/>
      <PasswordField name="password" label="Password"/>
      <PasswordField name="repeat_password" label="Repeat Password"/>

      <Button type="submit" variant="primary" label="Sign up"/>

      <div className="flex items-center justify-center space-x-2 mt-5">
        <span>Already have an account?</span><Link to="auth/login" className="text-blue-600">Log in</Link>
      </div>
    </Form>
  )
}

export default RegisterForm