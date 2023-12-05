import Button from "@/components/Button"
import FixedLayout from "@/layouts/FixedLayout"
import SensorModel from "@/store/sensor/SensorModel"
import { FormProvider, useForm } from "react-hook-form"

interface Props {
  sensor: SensorModel,
  onClose: () => void,
  onSubmit: () => void
}

const Header: React.FC = () => (
  <div>Are you sure ?</div>
)

const Footer: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="flex space-x-4">
    <Button type="submit" variant="primary" label="Confirm"/>
    <Button variant="negative" label="Cancel" onClick={ onClose }/>
  </div>
)

const SensorForm: React.FC<Props> = ({ sensor, onClose, onSubmit }) => {
  const methods = useForm()

  return (
    <FormProvider { ...methods }>
        <form onSubmit={ methods.handleSubmit(onSubmit) }>
          <FixedLayout
            header={ <Header/> }
            footer={ <Footer onClose={ onClose }/> }
          >
            <p>
              Are you sure you want to delete the sensor <b>{ sensor.data.name }</b>? 
              This action is irreversible and will result in the removal of all data associated with this sensor. 
              Please confirm deletion.
            </p>
          </FixedLayout>
        </form>
    </FormProvider>
  )
}

export default SensorForm