import Button from "@/components/Button"
import Page from "@/components/Page"
import SensorDialog from '@/pages/sensors/components/dialog/create/SensorDialog'
import SensorList from "@/pages/sensors/components/list/SensorList"
import { useDialog } from "@/providers"

const NewSensorButton: React.FC = () => {
  const { openDialog } = useDialog()
  
  return (
    <Button 
      variant="primary" 
      icon="plus" 
      label="New Sensor" 
      onClick={ () => openDialog(SensorDialog) }
    />
  )
}

const SensorPage: React.FC = () => (
  <Page breadcrumb={ ['sensors'] } prepend={ <NewSensorButton/> }>
    <SensorList/>
  </Page>
)

export default SensorPage