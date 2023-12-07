import React from 'react'
import SensorItem from '@/pages/sensors/components/list/SensorItem'
import { useAppStore } from '@/providers/internal/AppStoreProvider'
import { observer } from 'mobx-react-lite'

const SensorList: React.FC = () => {
  const { sensorStore: { sensors } } = useAppStore()

  return (
    <>
      {sensors.map(sensor => (
        <SensorItem key={ sensor.id } sensor={ sensor }/>
      ))}
    </>
  )
}

export default observer(SensorList)