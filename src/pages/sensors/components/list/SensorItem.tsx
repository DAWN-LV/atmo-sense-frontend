import { Dropdown, Item } from "@/components/dropdown"
import Icon from "@/components/icon"
import Accordion from "@/components/Accordion"
import { useDialog } from "@/providers"
import SensorDialog from "@/pages/sensors/components/dialog/remove/SensorDialog"
import SensorModel from "@/store/sensor/SensorModel"
import Badge from "@/components/Badge"

const SensorDropdown: React.FC<{ sensor: SensorModel }> = ({ sensor }) => {
  const { openDialog } = useDialog()

  return (
    <Dropdown parent={ <Icon name="ellipsis_vertical" className="cursor-pointer"/> }>
      <Item label="Edit" icon="pen_to_square"/>
      <Item label="Remove" icon="trash" className="text-red-500" onClick={ () => openDialog(SensorDialog, { sensor }) }/>
    </Dropdown>
  )
}

const SensorItem: React.FC<{ sensor: SensorModel }> = ({ sensor }) => (
  <Accordion 
    title={ sensor.data.name } 
    prepend={ [ <Badge label="CO2"/>, <SensorDropdown sensor={ sensor }/> ] }
  >
    <div>IP: { sensor.data.ip }</div>
  </Accordion>
)

export default SensorItem