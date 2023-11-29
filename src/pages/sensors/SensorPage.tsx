import Page from "@/components/Page"
import SensorList from "@/pages/sensors/components/list/SensorList"

const SensorPage: React.FC = () => (
  <Page breadcrumb={ ['sensors'] }>
    <SensorList/>
  </Page>
)

export default SensorPage