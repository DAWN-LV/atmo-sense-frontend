import { Form } from "@/components/form"
import Button from "@/components/Button"
import { Dialog } from "@/components/dialog"
import { useAlert } from "@/providers"
import { UpdateSensorDTO } from "@/store/sensor/sensors/types"
import UpdateSensorForm from "./components/UpdateSensorForm"
import SensorModel from "@/store/sensor/sensors/SensorModel"

interface Props {
  sensor: SensorModel,
  onConfirm?: () => void,
  onCancel?: () => void
}

const DialogFooter: React.FC<{ onCancel?: () => void }> = ({ onCancel }) => (
  <div className="flex space-x-4">
    <Button type="submit"variant="primary" label="Update"/>
    <Button variant="negative" label="Cancel" onClick={ onCancel }/>
  </div>
)

const UpdateSensorDialog: React.FC<Props> = ({ sensor, onConfirm, onCancel }) => {
  const alert = useAlert()
  
  const initialValues: UpdateSensorDTO = {
    name: sensor.data.name,
    color: sensor.data.color,
    type: sensor.data.type,
    gpioPin: sensor.data.gpioPin,
  }

  const handleConfirm = async (dto: UpdateSensorDTO) => {
    await sensor.update(dto)
    alert.add({
      category: "success",
      content: "The new sensor has been successfully updated from your system."
    })

    onConfirm && onConfirm()
  }

  return (
    <Form initialValues={ initialValues } onSubmit={ handleConfirm }>
      <Dialog header="Update Sensor" footer={ <DialogFooter onCancel={ onCancel }/> }>
        <UpdateSensorForm/>
      </Dialog>
    </Form>
  )
}

export default UpdateSensorDialog