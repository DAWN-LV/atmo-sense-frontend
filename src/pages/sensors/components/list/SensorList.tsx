import React from 'react'
import Button from "@/components/Button"
import SensorDialog from '@/pages/sensors/components/dialog/SensorDialog'
import SensorItem from '@/pages/sensors/components/list/SensorItem'
import { useDialog } from '@/components/dialog/provider'
import { useAppStore } from '@/store/provider'
import { observer } from 'mobx-react-lite'

const SensorList: React.FC = () => {
  const { sensorStore: { sensors } } = useAppStore()
  const { openDialog } = useDialog()

  return (
    <div className="space-y-4">
      <div className="ml-auto max-w-fit">
        <Button 
          variant="primary" 
          icon="plus" 
          label="New Sensor" 
          onClick={ () => openDialog(SensorDialog) }
        />
      </div>
      {sensors.map(sensor => (
        <SensorItem key={ sensor.id } sensor={ sensor }/>
      ))}
    </div>
  )
}

export default observer(SensorList)