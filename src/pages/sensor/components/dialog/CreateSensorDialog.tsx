import { Form } from "@/components/form"
import Button from "@/components/Button"
import { Dialog } from "@/components/dialog"
import { useAppStore, useAlert } from "@/providers"
import CreateSensorForm from "@/pages/sensor/components/dialog/components/CreateSensorForm"
import { CreateSensorDTO } from "@/store/sensor/sensors/types"

interface Props {
  onConfirm?: () => void,
  onCancel?: () => void
}

const DialogFooter: React.FC<{ onCancel?: () => void }> = ({ onCancel }) => (
  <div className="flex space-x-4">
    <Button type="submit"variant="primary" label="Add"/>
    <Button variant="negative" label="Cancel" onClick={ onCancel }/>
  </div>
)

const CreateSensorDialog: React.FC<Props> = ({ onConfirm, onCancel }) => {
  const { sensorContext: { sensorStore } } = useAppStore()
  const alert = useAlert()
  
  const handleConfirm = async (dto: CreateSensorDTO) => {
    await sensorStore.create(dto)
    alert.add({
      category: "success",
      content: "The new sensor has been successfully added to your system."
    })

    onConfirm && onConfirm()
  }

  return (
    <Form onSubmit={ handleConfirm }>
      <Dialog header="Add New Sensor" footer={ <DialogFooter onCancel={ onCancel }/> }>
        <CreateSensorForm/>
      </Dialog>
    </Form>
  )
}

export default CreateSensorDialog