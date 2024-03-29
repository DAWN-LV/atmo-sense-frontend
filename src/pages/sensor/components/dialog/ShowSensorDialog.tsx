import React, { useState } from "react"
import ButtonGroup from "@/components/ButtonGroup"
import SensorModel from "@/store/sensor/sensors/SensorModel"
import { Dialog } from "@/components/dialog"
import { Item, Table } from "@/components/table"
import ChartFactory from "@/pages/sensor/components/charts/ChartFactory"
import KBD from "@/components/KBD"

const options = [
	{ label: '1D', value: 86400 },
	{ label: '7D', value: 604800 },
	{ label: '30D', value: 2592000 },
	{ label: '6M', value: 15552000 },
	{ label: '1Y', value: 31536000  },
]

const ChartManagment: React.FC = () => (
  <Table columns={ [ "Key", "Description" ] }>
    <Item>
      <th scope="row" className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap dark:text-gray-400">
        <KBD label="Scroll Wheel"/>
      </th>
      <td className="px-6 py-4">Zoom in/out on the graph.</td>
    </Item>
    <Item>
      <th scope="row" className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap dark:text-gray-400">
        <KBD label="Drag"/>
      </th>
      <td className="px-6 py-4">Pan (move) the graph.</td>
    </Item>
  </Table>
)

const ShowSensorDialog: React.FC<{ sensor: SensorModel }> = ({ sensor }) => {
  const [ option, setOption ] = useState(options[0])

  return (
    <Dialog>
      <div className="flex justify-center">
        <ButtonGroup options={ options } onSelect={ (option) => setOption(option) }/>
      </div>
      <ChartFactory sensor={ sensor } from={ option.value } to={ 0 }/>
      <ChartManagment/>
    </Dialog>
  )
}

export default ShowSensorDialog