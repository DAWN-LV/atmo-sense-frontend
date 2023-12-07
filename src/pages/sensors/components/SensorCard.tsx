import SensorModel from "@/store/sensor/SensorModel"
import BaseSensorCard from "@/pages/sensors/components/BaseSensorCard"
import DeleteSensorAction from "@/pages/sensors/components/actions/DeleteSensorAction"

const Actions: React.FC<{ sensor: SensorModel }> = ({ sensor }) => (
  <>
    <div className="flex-grow"/>
    <DeleteSensorAction sensor={ sensor }/>
  </>
)

const SensorCard: React.FC<{ sensor: SensorModel }> = ({ sensor }) => (
  <BaseSensorCard sensor={ sensor } actions={ <Actions sensor={ sensor }/> }/>
)

export default SensorCard