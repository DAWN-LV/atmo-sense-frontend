import { useEffect } from "react"
import { FormProvider, useForm } from "react-hook-form"
import Button from "@/components/Button"
import { Dialog } from "@/components/dialog"

import { TextField } from "@/components/form"
import { ipValidation } from "@/components/form/validation/ip"
import { CreateSensorDTO } from "@/store/sensor/types"
import { useAppStore, useNotification } from "@/providers"

interface Props {
  onConfirm?: () => void,
  onCancel?: () => void
}

const CreateSensorDialog: React.FC<Props> = ({ onConfirm, onCancel }) => {
  const { sensorStore } = useAppStore()
  const notification = useNotification()
  
  const methods = useForm<CreateSensorDTO>()

  const handleConfirm = async (dto: CreateSensorDTO) => {
    await sensorStore.create(dto)
    notification.add({
      type: "success",
      title: "Sensor Added Successfully",
      message: "The new sensor has been successfully added to your system."
    })

    onConfirm && onConfirm()
  }

  return (
    <FormProvider { ...methods }>
      <form onSubmit={ methods.handleSubmit(handleConfirm) }>
        <Dialog
          header={ <div>Add new sensor</div> }
          footer={
            <div className="flex space-x-4">
              <Button 
                type="submit"
                variant="primary" 
                label="Add"
                loading={ methods.formState.isSubmitting }
              />
              <Button variant="negative" label="Cancel" onClick={ onCancel }/>
            </div>
          }
        >
          <div className="flex-grow overflow-hidden p-4">
            <TextField 
              name="name" 
              placeholder="Room-1" 
              label="Name"
              validates={ { required: "Name is required" } }
            />
            <TextField 
              name="ip" 
              placeholder="192.168.0.1" 
              label="IP"
              validates={ ipValidation }
            />
          </div>
        </Dialog>
      </form>
    </FormProvider>
  )
}

export default CreateSensorDialog