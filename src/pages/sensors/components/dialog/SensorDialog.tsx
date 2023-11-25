import Dialog from "@/components/dialog/Dialog"
import { useAppStore } from "@/hooks/useAppStore"
import SensorForm from "@/pages/sensors/components/dialog/SensorForm"
import { CreateSensorDTO } from "@/store/sensor/types"

const SensorDialog: React.FC<{ closeDialog: () => void }> = ({ closeDialog }) => {
  const { sensorStore } = useAppStore()
  
  const handleSubmit = async (value: CreateSensorDTO) => {
    await sensorStore.create(value)
    closeDialog()
  }
  
  return (
    <Dialog 
      closeDialog={ closeDialog } 
      children={ <SensorForm onSubmit={ handleSubmit }/> }
    />
  )
}

export default SensorDialog