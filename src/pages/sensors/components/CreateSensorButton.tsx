import { useDialog } from "@/components/dialog"
import { useNotification } from "@/providers"
import CreateSensorDialog from "@/pages/sensors/components/dialog/CreateSensorDialog"
import Button from "@/components/Button"

const CreateSensorButton: React.FC = () => {
  const notification = useNotification()
  const dialog = useDialog(CreateSensorDialog, {}, { persistent: true })

  dialog.onConfirm(() => {
    notification.add({
      type: "success",
      title: "Sensor Removed Successfully",
      message: "The sensor has been successfully removed from your system."
    })
  })

  return (
    <Button 
      variant="primary" 
      icon="plus"
      label="New sensor" 
      onClick={ dialog.reveal }
    />
  )
}

export default CreateSensorButton