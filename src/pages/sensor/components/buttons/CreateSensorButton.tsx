import Button from "@/components/Button"
import useDialog from "@/hooks/useDialog"
import CreateSensorDialog from "@/pages/sensor/components/dialog/CreateSensorDialog"

const CreateSensorButton: React.FC = () => {
  const dialog = useDialog(CreateSensorDialog, {}, { persistent: true })

  return (
    <Button variant="primary" icon="microchip" label="New sensor" onClick={ dialog.reveal }/> 
  )
}

export default CreateSensorButton