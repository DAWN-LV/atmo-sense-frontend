import Badge from "@/components/Badge"
import CollapsibleSection from "@/components/section/CollapsibleSection"
import SensorModel from "@/store/sensor/SensorModel"

const SensorItem: React.FC<{ sensor: SensorModel }> = ({ sensor }) => (
  <CollapsibleSection
    title={ sensor.data.name }
    append={ <Badge title="CO2"/> }
  >
    <ul>
      <li>IP: { sensor.data.ip }</li>
    </ul>
  </CollapsibleSection>
)

export default SensorItem