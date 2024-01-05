import { Link } from "react-router-dom"
import { useAuth } from "@/pages/auth/useAuth"
import Button from "@/components/Button"
import { useAlert } from "@/providers"
import { PasswordField, TextField, Form } from "@/components/form"

interface FormData {
  email: string
  password: string
}

const LoginForm: React.FC = () => {
  const alert = useAlert()
  const { login } = useAuth()

  const onSubmit = async ({ email, password }: FormData) => {
    await login(email, password)
    alert.add({
      category: "success",
      content: "Welcome! You have successfully logged into your account.",
    })
  }

  return (
    <Form onSubmit={ onSubmit }>
      <TextField name="email" label="Email"/>
      <PasswordField name="password" label="Password"/>

      <Button type="submit" variant="primary" label="Sign in"/>

      <div className="flex justify-center space-x-2 mt-5">
        <span> Don't have an account?</span><Link to="/auth/register" className="text-blue-600">Register</Link>
      </div>
    </Form>
  )
}

export default LoginForm