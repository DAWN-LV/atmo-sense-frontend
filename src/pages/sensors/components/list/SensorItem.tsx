import { memo } from "react"
import { Dropdown, Item } from "@/components/dropdown"
import Icon from "@/components/icon"
import Accordion from "@/components/Accordion"
import SensorModel from "@/store/sensor/SensorModel"
import Badge from "@/components/Badge"
import LineChart from "@/pages/sensors/components/chart/LineChart"
import Clipboard from "@/components/Clipboard"
import Indicator from "@/components/Indicator"
import { observer } from "mobx-react-lite"

const SensorDropdown: React.FC<{ sensor: SensorModel }> = ({ sensor }) => {
  return (
    <Dropdown parent={ <Icon name="ellipsis_vertical" className="cursor-pointer"/> }>
      <Item label="Edit" icon="pen_to_square"/>
      <Item label="Remove" icon="trash" className="text-red-500"/>
    </Dropdown>
  )
}

const Prepend: React.FC<{ sensor: SensorModel }> = memo(({ sensor }) => (
  <>
    <Badge key={ `badge_${sensor.id}` } label="CO2"/>
    <SensorDropdown key={ `dropdown_${sensor.id}` } sensor={ sensor }/>
  </>
))

const SensorItem: React.FC<{ sensor: SensorModel }> = ({ sensor }) => {
  return (
    <Accordion 
      title={ sensor.data.name } 
      append={ <Indicator/> }
      prepend={ <Prepend sensor={ sensor }/> }
    >
      <div className="flex flex-col items-start bg-gray-100 dark:bg-gray-800 -m-5 mb-5 p-5">
        <Clipboard title="IP :" label={ sensor.data.ip }/>
        <Clipboard title="MAC :" label={ sensor.data.mac }/>
      </div>

      <LineChart
        threshold={ 70 }
        xMin={ +(Date.now() / 1000).toFixed(0) - 100000 + 1 * 300 }
        xMax={ +(Date.now() / 1000).toFixed(0) - 100000 + 101 * 300 }
      />
    </Accordion>
  )
}

export default observer(SensorItem)
