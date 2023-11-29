import Dialog from "@/components/Dialog"
import SensorForm from "@/pages/sensors/components/dialog/remove/SensorForm"
import { useNotification } from "@/providers"
import { DialogProps } from "@/providers/types"

const SensorDialog: React.FC<DialogProps> = ({ closeDialog, name }) => {
  const notification = useNotification()
  
  const handleSubmit = async () => {
    // await sensorStore.remove()
    notification.add({
      type: "success",
      title: "Sensor Removed Successfully",
      message: "The sensor has been successfully removed from your system."
    })

    closeDialog()
  }
  
  return (
    <Dialog onClose={ closeDialog }>
      <SensorForm name={ name } onClose={ closeDialog }/>
    </Dialog>
  )
}

export default SensorDialog