import { Dropdown, Item } from "@/components/dropdown"
import Icon from "@/components/icon"
import Accordion from "@/components/Accordion"
import SensorModel from "@/store/sensor/SensorModel"
import Badge from "@/components/Badge"

const SensorDropdown: React.FC<{ sensor: SensorModel }> = ({ sensor }) => {
  return (
    <Dropdown parent={ <Icon name="ellipsis_vertical" className="cursor-pointer"/> }>
      <Item label="Edit" icon="pen_to_square"/>
      <Item label="Remove" icon="trash" className="text-red-500"/>
    </Dropdown>
  )
}

const SensorItem: React.FC<{ sensor: SensorModel }> = ({ sensor }) => (
  <Accordion 
    id={ `sensor-${sensor.id}` }
    title={ sensor.data.name } 
    prepend={ [ <Badge label="CO2"/>, <SensorDropdown sensor={ sensor }/> ] }
  >
    <div>IP: { sensor.data.ip }</div>
  </Accordion>
)

export default SensorItem