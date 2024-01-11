import LineChart from "@/components/chart"
import { useAppStore } from "@/providers"
import SensorModel from "@/store/sensor/sensors/SensorModel"

const Co2Chart: React.FC<{ sensor: SensorModel }> = () => {
  const {} = useAppStore()

  return (
    <>
      {/* // <LineChart points={}/> */}
    </>
  )
}    