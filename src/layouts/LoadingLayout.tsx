import Spinner from "@/components/Spinner"
import { classNames } from "@/utils"

type Props = React.HTMLAttributes<HTMLDivElement>

const LoadingLayout: React.FC<Props> = ({ ...props }) => (
  <div className={ classNames("fixed top-0 left-0 w-screen h-screen flex justify-center items-center dark:text-white", props.className) }>
    <Spinner className="text-6xl w-full h-full"/>
  </div>
)

export default LoadingLayout