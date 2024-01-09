import Spinner from "@/components/Spinner"

const LoadingLayout: React.FC = () => (
  <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center dark:text-white">
    <Spinner className="text-6xl w-full h-full"/>
  </div>
)

export default LoadingLayout