import Spinner from "@/components/Spinner"

const LoadingLayout: React.FC = () => (
  <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center">
    <Spinner/>
  </div>
)

export default LoadingLayout