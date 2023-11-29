import Button from "@/components/Button"
import FixedLayout from "@/layouts/FixedLayout"

interface Props {
  name: string,
  onClose: () => void
}

const Header: React.FC = () => (
  <div>Are you sure ?</div>
)

const Footer: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="flex space-x-4">
    <Button variant="primary" label="Confirm"/>
    <Button variant="negative" label="Cancel" onClick={ onClose }/>
  </div>
)

const SensorForm: React.FC<Props> = ({ name, onClose }) => (
  <FixedLayout
    header={ <Header/> }
    footer={ <Footer onClose={ onClose }/> }
  >
    <p>
      Are you sure you want to delete the sensor <b>{ name }</b>? 
      This action is irreversible and will result in the removal of all data associated with this sensor. 
      Please confirm deletion.
    </p>
  </FixedLayout>
)

export default SensorForm