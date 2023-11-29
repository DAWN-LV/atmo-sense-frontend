import Dialog from "@/components/Dialog"
import SensorForm from "@/pages/sensors/components/dialog/create/SensorForm"
import { useAppStore, useNotification } from "@/providers"
import { DialogProps } from "@/providers/types"
import { CreateSensorDTO } from "@/store/sensor/types"

const SensorDialog: React.FC<DialogProps> = ({ closeDialog }) => {
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
    <Dialog onClose={ closeDialog }>
      <SensorForm onSubmit={ handleSubmit } onClose={ closeDialog }/>
    </Dialog>
  )
}

export default SensorDialog