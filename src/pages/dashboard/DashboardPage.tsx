import Accordion from "@/components/Accordion"
import Page from "@/components/Page"
import DashboardTile from "@/pages/dashboard/components/DashboardTile"
import SensorCard from "@/pages/sensor/components/SensorCard"
import { useAppStore } from "@/providers"
import { observer } from "mobx-react-lite"
import { useMemo } from "react"

const DashboardPage: React.FC = () => {
  const { sensorContext: { sensorStore, groupStore } } = useAppStore()

  const sensors = useMemo(() => {
    return sensorStore.sensors.values
      .slice()
      .sort((a, b) => new Date(b.data.updatedAt).getTime() - new Date(a.data.updatedAt).getTime())
      .slice(0, 8)
  }, [ sensorStore.sensors ])

  return (
    <Page breadcrumb={ ["dashboard"] }>
      <div className="flex flex-grow flex-col md:flex-row gap-2">
        <DashboardTile icon="microchip" label="Total Sensors" count={ sensorStore.count }/>
        <DashboardTile icon="user_group" label="Total Groups" count={ groupStore.count }/>
      </div>

      <Accordion title="Recently updated sensors" initState={ Boolean(sensorStore.count) }>
        <div className="flex flex-wrap gap-4 justify-center md:justify-normal">
          {sensors.map(sensor => (
            <SensorCard key={ sensor.id } sensor={ sensor }/>
          ))}
        </div>
      </Accordion>
    </Page>
  )
}

export default observer(DashboardPage)