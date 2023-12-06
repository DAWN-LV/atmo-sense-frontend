import React from 'react'
import Button from "@/components/Button"
import SensorDialog from '@/pages/sensors/components/dialog/create/SensorDialog'
import SensorItem from '@/pages/sensors/components/list/SensorItem'
import { useDialog } from '@/providers/internal/DialogProvider'
import { useAppStore } from '@/providers/internal/AppStoreProvider'
import { observer } from 'mobx-react-lite'

const SensorList: React.FC = () => {
  const { sensorStore: { sensors } } = useAppStore()
  const { openDialog } = useDialog()

  return (
    <>
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
    </>
  )
}

export default observer(SensorList)