import React from 'react'
import SensorItem from '@/pages/sensors/components/list/SensorItem'
import { useAppStore } from '@/providers/internal/AppStoreProvider'
import { observer } from 'mobx-react-lite'

const SensorList: React.FC = () => {
  const { sensorStore: { sensors } } = useAppStore()

  return (
    <div className="space-y-4">
      {sensors.map(sensor => (
        <SensorItem key={ sensor.id } sensor={ sensor }/>
      ))}
    </div>
  )
}

export default observer(SensorList)