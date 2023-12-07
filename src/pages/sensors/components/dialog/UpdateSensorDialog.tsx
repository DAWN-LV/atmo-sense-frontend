import { FormProvider, useForm } from "react-hook-form"
import Button from "@/components/Button"
import { Dialog } from "@/components/dialog"

import { TextField } from "@/components/form"
import { UpdateSensorDTO } from "@/store/sensor/types"
import { useNotification } from "@/providers"
import SensorModel from "@/store/sensor/SensorModel"

interface Props {
  sensor: SensorModel,
  onConfirm?: () => void,
  onCancel?: () => void
}

const UpdateSensorDialog: React.FC<Props> = ({ sensor, onConfirm, onCancel }) => {
  const notification = useNotification()
  
  const methods = useForm<UpdateSensorDTO>({ 
    defaultValues: { 
      name: sensor.data.name 
    } 
  })

  const handleConfirm = async (dto: UpdateSensorDTO) => {
    await sensor.update(dto)
    notification.add({
      type: "success",
      title: "Sensor Updated Successfully",
      message: "The sensor has been successfully updated to your system."
    })

    onConfirm && onConfirm()
  }

  return (
    <FormProvider { ...methods }>
      <form onSubmit={ methods.handleSubmit(handleConfirm) }>
        <Dialog
          header={ <div>Update sensor</div> }
          footer={
            <div className="flex space-x-4">
              <Button 
                type="submit"
                variant="primary" 
                label="Update"
                loading={ methods.formState.isSubmitting }
              />
              <Button variant="negative" label="Cancel" onClick={ onCancel }/>
            </div>
          }
        >
          <div className="flex-grow overflow-hidden p-4">
            <TextField 
              name="name" 
              placeholder="Room-Kitchen" 
              label="Name"
              validates={ { required: "Name is required" } }
            />
          </div>
        </Dialog>
      </form>
    </FormProvider>
  )
}

export default UpdateSensorDialog