import Icon, { IconName } from "@/components/icon"
import Button from "@/components/Button"
import { AlertType } from "@/store/alerts/types"
import AlertModel from "@/store/alerts/AlertModel"
import { classNames } from "@/utils"

interface Props {
  alert: AlertModel,
  onClose: () => void
}

const settings: Record<AlertType, { color: string, icon: IconName }> = {
  "info": { color: "bg-blue-100 text-blue-500 dark:bg-blue-800 dark:text-blue-200", icon: "circle_exclamation" },
  "success": { color: "bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200", icon: "circle_check" },
  "warning": { color: "bg-orange-100 text-orange-500 dark:bg-orange-800 dark:text-orange-200", icon: "circle_exclamation" },
  "error": { color: "bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200", icon: "circle_xmark" }
}

const Alert: React.FC<Props> = ({ alert, onClose }) => (
  <div className="flex items-center w-full md:max-w-sm p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
    <div className={ classNames("flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg", settings[alert.category].color) }>
      <Icon name={ settings[alert.category].icon }/>
    </div>
    <div className="mx-3 text-sm font-normal">{ alert.content }</div>
    <div className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" onClick={ onClose }>
      <Button icon="xmark"/>
    </div>
  </div>
)

export default Alert