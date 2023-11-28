import Dialog from "@/components/dialog/Dialog"
import { useAppStore } from '@/store/provider'
import SensorForm from "@/pages/sensors/components/dialog/SensorForm"
import { CreateSensorDTO } from "@/store/sensor/types"
import { useNotification } from "@/store/notification/provider"

const SensorDialog: React.FC<{ closeDialog: () => void }> = ({ closeDialog }) => {
  const notification = useNotification()
  const { sensorStore } = useAppStore()
  
  const handleSubmit = async (value: CreateSensorDTO) => {
    await sensorStore.create(value)
    notification.add({
      type: "success",
      title: "Sensor Added Successfully",
      message: "The new sensor has been successfully added to your system."
    })

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