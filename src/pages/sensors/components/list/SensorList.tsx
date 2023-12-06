import React from "react"
import { observer } from "mobx-react-lite"
import SensorItem from "@/pages/sensors/components/list/SensorItem"
import { useAppStore } from "@/providers/internal/AppStoreProvider"
import CreateSensorButton from "@/pages/sensors/components/CreateSensorButton"

const SensorList: React.FC = () => {
  const { sensorStore: { sensors } } = useAppStore()

  return (
    <>
      <div className="ml-auto max-w-fit">
        <CreateSensorButton/>
      </div>
      {sensors.map(sensor => (
        <SensorItem key={ sensor.id } sensor={ sensor }/>
      ))}
    </>
  )
}

export default observer(SensorList)