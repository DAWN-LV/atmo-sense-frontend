import Icon from "@/components/icon"
import SensorModel from "@/store/sensor/sensors/SensorModel"
import { classNames } from "@/utils"
import { observer } from "mobx-react-lite"

type Props = React.HTMLAttributes<HTMLDivElement> & {
  sensor: SensorModel,
  actions?: React.ReactNode,
}

const BaseSensorCard: React.FC<Props> = ({ sensor, actions, ...props }) => {
  return (
    <div { ...props } className={ classNames("inline-block relative space-y-2 max-w-xs w-full min-h-36 p-4 border overflow-hidden shadow rounded-lg bg-gray-100 dark:border-gray-700 dark:bg-gray-800", props.className) }>
      <div className="flex items-center justify-between w-full">
        <h3 className="text-xl font-semibold dark:text-white text-black">{ sensor.data.name }</h3>
        <div 
          className="flex p-3 rounded-lg text-white text-lg bg-blue-600"
          style={{ backgroundColor: sensor.data.color ? sensor.data.color : undefined }}
        >

          <Icon name="microchip"/>
        </div>
      </div>

      <div className="flex flex-col text-gray-400 text-xs font-semibold space-y-1">
        <div className="flex items-center space-x-1">
          <Icon name="location_crosshair" className="text-xs"/>
          { sensor.data.ip ? (
            <span>{ sensor.data.ip }</span>
          ) : (
            <span>unknown</span>
          ) }
        </div>
        <div className="flex items-center space-x-1">
          <Icon name="network_group" className="text-xs"/>
          <span>{ sensor.data.mac }</span>
        </div>
      </div>

      <div className="flex-grow py-1"/>

      { actions ? (
        <div className="flex items-center justify-between w-full p-2 px-4 bg-gray-200 dark:bg-gray-600 rounded-lg">
          { actions }
        </div>
      ) : null }
    </div>
  )
}

export default observer(BaseSensorCard)