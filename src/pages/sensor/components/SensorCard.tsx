import SensorModel from "@/store/sensor/sensors/SensorModel"
import BaseSensorCard from "@/pages/sensor/components/BaseSensorCard"
import Icon from "@/components/icon"
import useDialog from "@/hooks/useDialog"
import UpdateSensorDialog from "@/pages/sensor/components/dialog/UpdateSensorDialog"
import ShowSensorDialog from "@/pages/sensor/components/dialog/ShowSensorDialog"
import useConfirmationDialog from "@/hooks/useConfirmationDialog"
import { useAppStore, useAlert } from "@/providers"

const Actions: React.FC<{ sensor: SensorModel }> = ({ sensor }) => {
  const alert = useAlert()

  const showDialog = useDialog(ShowSensorDialog, { sensor })
  const updateDialog = useDialog(UpdateSensorDialog, { sensor }, { persistent: true })
  const deleteDialog = useConfirmationDialog({
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

  deleteDialog.onConfirm(async () => {
    await sensor.delete()
    alert.add({
      category: "success",
      content: "The sensor has been successfully removed from your system."
    })
  })

  return (
    <div className="flex flex-grow justify-between">
      <Icon name="chart_simple" className="cursor-pointer hover:opacity-50" onClick={ showDialog.reveal }/>
      <div className="flex items-center space-x-2">
        <Icon name="gear" className="cursor-pointer hover:opacity-50" onClick={ updateDialog.reveal }/>
        <Icon name="trash" className="cursor-pointer text-red-600 hover:opacity-50" onClick={ deleteDialog.reveal }/>
      </div>
    </div>
  )
}

const SensorCard: React.FC<{ sensor: SensorModel }> = ({ sensor }) => {
  const { userStore: { user } } = useAppStore()

  return (
    <BaseSensorCard sensor={ sensor } actions={ user.id === sensor.data.ownerId ? <Actions sensor={ sensor }/> : null }/>
  )
}

export default SensorCard