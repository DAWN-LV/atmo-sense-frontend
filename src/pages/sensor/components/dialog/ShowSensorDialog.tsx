import React, { useEffect, useState } from "react"
import ButtonGroup from "@/components/ButtonGroup"
import LineChart from "@/components/chart"
import SensorModel from "@/store/sensor/sensors/SensorModel"
import SensorApi from "@/store/sensor/sensors/SensorApi"
import { Dialog } from "@/components/dialog"
import useAsyncState from "@/hooks/mobx/useAsyncState"
import { observer } from "mobx-react-lite"
import { Item, Table } from "@/components/table"
import KBD from "@/components/KBD"

const options = [
	{ label: '1D', value: 86400 },
	{ label: '7D', value: 604800 },
	{ label: '30D', value: 2592000 },
	{ label: '6M', value: 15552000 },
	{ label: '1Y', value: 31536000  },
]

const HistoricalChart: React.FC<{ sensor: SensorModel, from: number, to: number }> = observer(({ sensor, from, to }) => {
  const [ points, setPoints ] = useState<{ x: number, y: number }[]>([])

  const fetchData = useAsyncState(SensorApi.fetchData)

  useEffect(() => {
    fetchData(sensor.id, { from, to })
      .then(data => setPoints(data.map(data => ({ x: Number(data[0]), y: Number(data[1]) }))))
  }, [ sensor, from, to ])

  return (
    <>{ points.length ? (
      <LineChart points={ points }/>
    ) : null }</>
  )
})

const ShowSensorDialog: React.FC<{ sensor: SensorModel }> = ({ sensor }) => {
  const [ option, setOption ] = useState(options[0])

  return (
    <Dialog>
      <div className="flex justify-center">
        <ButtonGroup options={ options } onSelect={ (option) => setOption(option) }/>
      </div>
      <HistoricalChart sensor={ sensor } from={ option.value } to={ 0 }/>
      <Table columns={ [ "Key", "Description" ] }>
        <Item>
          <th scope="row" className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap dark:text-gray-400">
            <KBD label="Scroll Wheel"/>
          </th>
          <td className="px-6 py-4">
            Zoom in/out on the graph.
          </td>
        </Item>
        <Item>
          <th scope="row" className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap dark:text-gray-400">
            <KBD label="Drag"/>
          </th>
          <td className="px-6 py-4">
            Pan (move) the graph.
          </td>
        </Item>
      </Table>
    </Dialog>
  )
}

export default ShowSensorDialog