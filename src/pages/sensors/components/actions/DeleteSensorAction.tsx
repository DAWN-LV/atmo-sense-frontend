import { useConfirmationDialog } from "@/components/dialog"
import Icon from "@/components/icon"
import { useNotification } from "@/providers"
import SensorModel from "@/store/sensor/SensorModel"

const DeleteSensorAction: React.FC<{ sensor: SensorModel }> = ({ sensor }) => {
  const notification = useNotification()
  const dialog = useConfirmationDialog({
    title: 'Are you sure?',
    cancelLabel: "Cancel",
    confirmLabel: 'Yes, delete sensor',
    content: `
      Are you sure you want to delete the sensor <span class="text-red-600 font-bold">${sensor.data.name}</span>? 
      This action is irreversible and will result in the removal of all data associated with this sensor. 
      Please confirm deletion.
    `,
    persistent: true,
  })

  dialog.onConfirm(async () => {
    await sensor.delete()
    notification.add({
      type: "success",
      title: "Sensor Removed Successfully",
      message: "The sensor has been successfully removed from your system."
    })
  })

  return (
    <Icon name="trash" className="cursor-pointer text-red-600" onClick={ dialog.reveal }/>
  )
}

export default DeleteSensorAction