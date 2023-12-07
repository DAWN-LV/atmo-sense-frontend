import Button from "@/components/Button"
import Page from "@/components/Page"
import CreateSensorDialog from '@/pages/sensors/components/dialog/CreateSensorDialog'
import SensorList from "@/pages/sensors/components/list/SensorList"
import useDialog from "@/hooks/useDialog"

const NewSensorButton: React.FC = () => {
  const dialog = useDialog(CreateSensorDialog, {}, { persistent: true })

  return (
    <Button 
      variant="primary" 
      icon="plus" 
      label="New Sensor" 
      onClick={ dialog.reveal }
    />
  )
}

const SensorPage: React.FC = () => (
  <Page breadcrumb={ ['sensors'] } prepend={ <NewSensorButton/> }>
    <SensorList/>
  </Page>
)

export default SensorPage