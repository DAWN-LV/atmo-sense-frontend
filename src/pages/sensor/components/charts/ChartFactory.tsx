import { useEffect, useState } from "react"
import SensorModel from "@/store/sensor/sensors/SensorModel"
import useAsyncState from "@/hooks/mobx/useAsyncState"
import SensorApi from "@/store/sensor/sensors/SensorApi"
import SensorChart from "@/pages/sensor/components/charts/SensorChart"

const ChartFactory: React.FC<{ sensor: SensorModel, from: number, to: number }> = ({ sensor, from, to }) => {
  const [ points, setPoints ] = useState<{ x: number, y: number }[]>([])

  const fetchData = useAsyncState(SensorApi.fetchData)

  useEffect(() => {
    fetchData(sensor.id, { from, to })
      .then(data => setPoints(data.map(data => ({ x: Number(data[0]), y: Number(data[1]) }))))
  }, [ sensor, from, to ])

  if (points.length <= 0) {
    return <div>Loading...</div>
  }

  if (sensor.template === undefined) {
    return <div>Template Not Found!</div>
  }

  switch (sensor.data.type) {
    default: return <SensorChart sensor={ sensor } points={ points } template={ sensor.template }/>
  }
}

export default ChartFactory