import Indicator, { IndicatorType } from "@/components/Indicator"
import SensorModel from "@/store/sensor/sensors/SensorModel"
import { useMemo } from "react"

const SensorIndicator: React.FC<{ sensor: SensorModel }> = ({ sensor }) => {
  const type = useMemo<IndicatorType>(() => {
    switch(sensor.data.status) {
      case "ACTIVE": return "success"
      case "RESTARTING": return "warning"
      default: return "error"
    }
  }, [ sensor ])

  return (
    <Indicator type={ type }/>
  )
}

export default SensorIndicator