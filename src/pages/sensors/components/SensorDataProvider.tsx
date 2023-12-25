import { ReactElement, useEffect, useState } from "react"
import SensorApi from "@/store/sensor/SensorApi"

interface Props {
  id: number,
  from: number,
  to: number,
  children: (data: any) => ReactElement
}

const SensorDataProvider: React.FC<Props> = (props) => {
  const [ data, setData ] = useState(undefined)

  useEffect(() => {
    SensorApi.fetchData(props.id, { 
      from: props.from, 
      to: props.to 
    })
    .then(data => setData(data.values))
  }, [ props.id, props.to, props.from ])

  if (!data) {
    return <div>Loading...</div>
  }

  return props.children(data)
}

export default SensorDataProvider