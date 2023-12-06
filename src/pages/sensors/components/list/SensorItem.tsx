import { Dropdown, Item } from "@/components/dropdown"
import Icon from "@/components/icon"
import Accordion from "@/components/Accordion"
import { useDialog } from "@/providers"
import SensorDialog from "@/pages/sensors/components/dialog/remove/SensorDialog"
import SensorModel from "@/store/sensor/SensorModel"
import Badge from "@/components/Badge"
import LineChart from "../chart/LineChart"
import { useMemo } from "react"

const SensorDropdown: React.FC<{ sensor: SensorModel }> = ({ sensor }) => {
  const { openDialog } = useDialog()

  return (
    <Dropdown parent={ <Icon name="ellipsis_vertical" className="cursor-pointer"/> }>
      <Item label="Edit" icon="pen_to_square"/>
      <Item label="Remove" icon="trash" className="text-red-500" onClick={ () => openDialog(SensorDialog, { sensor }) }/>
    </Dropdown>
  )
}

const SensorItem: React.FC<{ sensor: SensorModel }> = ({ sensor }) => {
  const prepend = useMemo(() => {
    return (
      <>
        <Badge key={`badge_${sensor.id}`} label="CO2"/>
        <SensorDropdown key={`dropdown_${sensor.id}`} sensor={ sensor }/>
      </>
    )
  }, [sensor])

  return (
    <Accordion 
      title={ sensor.data.name } 
      prepend={ prepend }
    >
      <div>IP: { sensor.data.ip }</div>
  
      <LineChart
        threshold={70}
        xMin={+(Date.now() / 1000).toFixed(0) - 100000 + 1 * 300}
        xMax={+(Date.now() / 1000).toFixed(0) - 100000 + 101 * 300}
      />
    </Accordion>
  )
}

export default SensorItem
