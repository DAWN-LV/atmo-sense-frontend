import Icon, { IconName } from "@/components/icon"
import { useDialog } from "@/providers"
import SensorModel from "@/store/sensor/SensorModel"
import { classNames } from "@/utils"
import SensorDialog from "@/pages/sensors/components/dialog/remove/SensorDialog"
import { Link } from "react-router-dom"

const Action: React.FC<{ icon: IconName } & React.HTMLAttributes<HTMLSpanElement>> = ({ icon, ...props }) => (
  <Icon { ...props } name={ icon } className={ classNames("cursor-pointer", props.className) }/>
)

const SensorCard: React.FC<{ sensor: SensorModel }> = ({ sensor }) => {
  const { openDialog } = useDialog()

  return (
    <div className="flex flex-col items-start p-4 max-w-xs border overflow-hidden shadow rounded-lg bg-gray-100 dark:border-gray-700 dark:text-white dark:bg-gray-800">
      <div className="flex items-center justify-between w-full">
        <Link to={ `/sensors#sensor-${sensor.id}` }>
          <h3 className="text-xl font-semibold">{ sensor.data.name }</h3>
        </Link>
        <div className="flex p-3 rounded-lg text-white text-lg bg-blue-600">
          <Icon name="microchip"/>
        </div>
      </div>
      <div className="text-gray-400 text-sm font-semibold space-y-1 my-2">
        <div className="flex items-center space-x-2">
          <Icon name="database"/>
          <span>123</span>
        </div>
        <div className="flex items-center space-x-2">
          <Icon name="signal"/>
          <span>Running</span>
        </div>
      </div>
      <div className="flex items-center justify-between w-full mt-2 p-2 px-4 bg-gray-200 dark:bg-gray-600 rounded-lg">
        <div>
          {/* <Icon name="play" className="text-green-600"/> */}
          {/* <Icon name="stop" className="text-green-600"/> */}
        </div>
        <Action icon="trash" className="text-red-600 hover:text-red-500" onClick={ () => openDialog(SensorDialog, { sensor }) }/>
      </div>
    </div>
  )
}

export default SensorCard