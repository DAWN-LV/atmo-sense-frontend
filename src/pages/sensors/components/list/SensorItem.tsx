import { memo, useEffect, useState } from "react"
import { Dropdown, Item } from "@/components/dropdown"
import Icon from "@/components/icon"
import Accordion from "@/components/Accordion"
import SensorModel from "@/store/sensor/SensorModel"
import Badge from "@/components/Badge"
import LineChart from "@/components/LineChart"
import Clipboard from "@/components/Clipboard"
import Indicator from "@/components/Indicator"
import { observer } from "mobx-react-lite"
import useDialog from "@/hooks/useDialog"
import UpdateSensorDialog from "@/pages/sensors/components/dialog/UpdateSensorDialog"
import SensorApi from "@/store/sensor/SensorApi"
import { getLineAnnotation } from "@/components/LineChart/utils"

const SensorDropdown: React.FC<{ sensor: SensorModel }> = ({ sensor }) => {
  const editDialog = useDialog(UpdateSensorDialog, { sensor }, { persistent: true })

  return (
    <Dropdown parent={ <Icon name="ellipsis_vertical" className="cursor-pointer"/> }>
      <Item label="Edit" icon="pen_to_square" onClick={ editDialog.reveal }/>
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
  const [ data, setData ] = useState<any>({ datasets: [] })

  useEffect(() => {
    SensorApi.fetchData(sensor.id, { 
      from: 10000, 
      to: 10
    })
    .then(data => {
      const parsedData = data.values.map((el: any) => {
        return {
          x: el[0],
          y: el[1],
          beforeLabel: `max: ${el[3]}`,
          label: `avg: ${el[1]}`,
          afterLabel: `min: ${el[2]}`
        }
      })

      setData({
        datasets: [
          {
            data: parsedData,
            borderColor: 'rgb(37, 99, 235)',
            backgroundColor: 'rgba(37, 99, 235, 0.5)',
          }
        ]
      })
    })
  }, [sensor])

  const xMin = +((Date.now()).toFixed(0)) - 10000000
  const xMax = +((Date.now()).toFixed(0)) - 1000
  const threshold = 720

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

      {/* <div>{ JSON.stringify(data) }</div> */}

      <LineChart
        xMin={xMin}
        xMax={xMax}
        yMin={0}
        yMax={1000}
        data={data}
        annotations={getLineAnnotation(xMin, xMax, threshold, 'orange')}
        height={400}
      />
    </Accordion>
  )
}

export default observer(SensorItem)
