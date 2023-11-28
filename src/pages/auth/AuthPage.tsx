import Button from "@/components/Button"
import Logo from "@/components/Logo"
import config from "@/config"
import { Outlet } from "react-router-dom"

const AuthPage: React.FC = () => (
  <div className="flex min-h-screen">
    <div className="w-full md:w-1/2 flex items-center bg-white">
      <div className="w-full max-w-xl mx-auto px-4 py-15">
        <div className="flex items-center justify-center">
          <Logo/>
        </div>
        <div className="text-center my-5">
          <h1 className="text-24 font-medium">Sign in to { config.app.title }</h1>
        </div>
        <div className="lg:flex lg:items-center mb-2">
          <Button type="button" icon="google" label="Sign in with Google"/>
        </div>
        <div className="relative flex items-center justify-center h-5 mb-2">
          <div className="absolute top-[50%] w-full border-t border-light-95"/>
          <div className="relative z-10 text-13 text-grey bg-white px-2">
            Or
          </div>
        </div>
        <Outlet/>
      </div>
    </div>
    <div className="relative hidden md:block md:w-1/2 bg-wedges-purple-600 overflow-hidden">
      {/* TODO: put image of Rospbery PI */}
    </div>
  </div>
)

export default AuthPage