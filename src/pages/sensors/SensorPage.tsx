import { useAppStore } from "@/hooks/useAppStore"
import { observer } from "mobx-react-lite"

const SensorPage: React.FC = observer(() => {
  const { sensorStore } = useAppStore()

  return (
    <>
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
        disabled={ sensorStore.load.isPending }
        onClick={ () => sensorStore.load() }
      >
        Resfresh
      </button>

      {sensorStore.sensors.map(sensor => (
        <b className="block">{ sensor.data.name }</b>
      ))}
    </>
  )
})

export default SensorPage