import { useMemo, useState } from "react"
import Page from "@/components/Page"
import Accordion from "@/components/Accordion"
import { useAppStore } from "@/providers"
import SensorCard from "@/pages/sensor/components/SensorCard"
import CreateSensorButton from "@/pages/sensor/components/buttons/CreateSensorButton"
import CreateGroupButton from "@/pages/sensor/components/buttons/CreateGroupButton"
import GroupSection from "@/pages/group/GroupSection"
import { observer } from "mobx-react-lite"

const PagePrepend: React.FC = () => (
  <div className="flex space-x-2">
    <CreateSensorButton/>
    <CreateGroupButton/>
  </div>
)

const SensorPage: React.FC = () => {
  const [ search, setSearch ] = useState('')
  const { sensorContext: { groupStore } } = useAppStore()

  const ungroupedSensors = useMemo(() => groupStore.ungrouped.filter(sensor => sensor.name.includes(search)), [ groupStore.ungrouped, search ])
  const groups = useMemo(() => groupStore.groups.values.filter(group => group.name.includes(search)), [ groupStore.groups.values, search ])

  return (
    <Page breadcrumb={ ['sensors'] } prepend={ <PagePrepend/> } onSearch={ (value) => setSearch(value.toLowerCase()) }>
      <Accordion title="Ungrouped Sensors" initState={ Boolean(groupStore.ungrouped.length) }>
        <div className="flex flex-wrap gap-4 justify-center md:justify-normal">
          {ungroupedSensors.map(sensor => (
            <SensorCard key={ sensor.id } sensor={ sensor }/>
          ))}
        </div>
      </Accordion>
      <GroupSection groups={ groups }/>
    </Page>
  )
}

export default observer(SensorPage)