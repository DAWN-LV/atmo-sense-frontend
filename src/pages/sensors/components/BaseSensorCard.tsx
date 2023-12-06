import Icon from "@/components/icon"
import SensorModel from "@/store/sensor/SensorModel"

interface Props {
  sensor: SensorModel,
  actions?: React.ReactNode,
}

const BaseSensorCard: React.FC<Props> = ({ sensor, actions }) => (
  <div className="inline-block space-y-2 max-w-xs w-full min-h-36 p-4 border overflow-hidden shadow rounded-lg bg-gray-100 dark:border-gray-700 dark:bg-gray-800">
    <div className="flex items-center justify-between w-full">
      <h3 className="text-xl font-semibold dark:text-white text-black">{ sensor.data.name }</h3>
      <div className="flex p-3 rounded-lg text-white text-lg bg-blue-600">
        <Icon name="microchip"/>
      </div>
    </div>

    <div className="flex flex-col text-gray-400 text-xs font-semibold space-y-1">
      <div className="flex items-center space-x-1">
        <Icon name="database" className="text-xs"/>
        <span>{ '123' }</span>
      </div>
      <div className="flex items-center space-x-1">
        <Icon name="signal" className="text-xs"/>
        <span>{ 'Status' }</span>
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

export default BaseSensorCard