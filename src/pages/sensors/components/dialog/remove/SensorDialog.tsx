import Dialog from "@/components/Dialog"
import SensorForm from "@/pages/sensors/components/dialog/remove/SensorForm"
import { useNotification } from "@/providers"
import { DialogProps } from "@/providers/types"

const SensorDialog: React.FC<DialogProps> = ({ sensor, closeDialog }) => {
  const notification = useNotification()
  
  const handleSubmit = async () => {
    await sensor.delete()
    notification.add({
      type: "success",
      title: "Sensor Removed Successfully",
      message: "The sensor has been successfully removed from your system."
    })

    closeDialog()
  }
  
  return (
    <Dialog onClose={ closeDialog }>
      <SensorForm sensor={ sensor } onSubmit={ handleSubmit } onClose={ closeDialog }/>
    </Dialog>
  )
}

export default SensorDialog