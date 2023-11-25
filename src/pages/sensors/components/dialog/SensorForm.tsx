import Button from "@/components/Button"
import TextField from "@/components/form/TextField"
import FixedLayout from "@/layouts/FixedLayout"
import { CreateSensorDTO } from "@/store/sensor/types"
import { FormProvider, useForm } from "react-hook-form"

const Header: React.FC = () => (
  <div>New Sensor</div>
)

const Footer: React.FC = () => (
  <div>
    <Button type="submit" variant="primary" label="Add"/>
  </div>
)

const SensorForm: React.FC<{ onSubmit: (data: CreateSensorDTO) => void }> = ({ onSubmit }) => {
  const methods = useForm<CreateSensorDTO>()

  return (
    <FormProvider { ...methods }>
      <form onSubmit={ methods.handleSubmit(onSubmit) }>
        <FixedLayout
          header={ <Header/> }
          footer={ <Footer/> }
        >
          <TextField name="name" placeholder="Room-1" label="Name"/>
          <TextField name="ip" placeholder="192.168.0.1" label="IP"/>
        </FixedLayout>
      </form>
    </FormProvider>
  )
}

export default SensorForm