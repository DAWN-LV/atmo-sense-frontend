import Button from "@/components/Button"
import { TextField } from "@/components/form"
import { ipValidation } from "@/components/form/validation/ip"
import FixedLayout from "@/layouts/FixedLayout"
import { CreateSensorDTO } from "@/store/sensor/types"
import { FormProvider, useForm } from "react-hook-form"

interface Props {
  onClose: () => void,
  onSubmit: (data: CreateSensorDTO) => void
}

const Header: React.FC = () => (
  <div>New Sensor</div>
)

const Footer: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="flex space-x-4">
    <Button type="submit" variant="primary" label="Add"/>
    <Button variant="negative" label="Cancel" onClick={ onClose }/>
  </div>
)

const SensorForm: React.FC<Props> = ({ onSubmit, onClose }) => {
  const methods = useForm<CreateSensorDTO>()

  return (
    <FormProvider { ...methods }>
      <form onSubmit={ methods.handleSubmit(onSubmit) }>
        <FixedLayout
          header={ <Header/> }
          footer={ <Footer onClose={ onClose }/> }
        >
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
        </FixedLayout>
      </form>
    </FormProvider>
  )
}

export default SensorForm