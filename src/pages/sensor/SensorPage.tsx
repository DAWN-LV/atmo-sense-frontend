import Page from "@/components/Page"
import Accordion from "@/components/Accordion"
import { useAppStore } from "@/providers"
import SensorCard from "@/pages/sensor/components/SensorCard"
import CreateSensorButton from "@/pages/sensor/components/buttons/CreateSensorButton"
import CreateGroupButton from "@/pages/sensor/components/buttons/CreateGroupButton"
import { observer } from "mobx-react-lite"
import GroupSection from "@/pages/group/GroupSection"

const PagePrepend: React.FC = () => (
  <div className="flex flex-col md:flex-row gap-2">
    <CreateSensorButton/>
    <CreateGroupButton/>
  </div>
)

const SensorPage: React.FC = () => {
  const { sensorContext: { groupStore } } = useAppStore()
  
  return (
    <Page breadcrumb={ ['sensors'] } prepend={ <PagePrepend/> }>
      <Accordion title="Ungrouped Sensors" initState={ Boolean(groupStore.ungrouped.length) }>
        <div className="flex flex-wrap gap-4 justify-center md:justify-normal">
          {groupStore.ungrouped.map(sensor => (
            <SensorCard key={ sensor.id } sensor={ sensor }/>
          ))}
        </div>
      </Accordion>
      <GroupSection/>
    </Page>
  )
}

export default observer(SensorPage)