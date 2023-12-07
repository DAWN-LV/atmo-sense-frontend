import Accordion from "@/components/Accordion"
import Page from "@/components/Page"
import DashboardTile from "@/pages/dashboard/components/DashboardTile"
import SensorCard from "@/pages/sensors/components/SensorCard"
import { useAppStore } from "@/providers"
import { observer } from "mobx-react-lite"

const DashboardPage: React.FC = () => {
  const { sensorStore } = useAppStore()

  return (
    <Page breadcrumb={ ["dashboard"] }>
      <div className="flex space-x-2">
        <DashboardTile icon="microchip" label="Total Sensors" count={ sensorStore.count }/>
      </div>

      <Accordion title="Recently added sensors" initState={ Boolean(sensorStore.count) }>
        <div className="flex flex-wrap gap-4 justify-center md:justify-normal">
          {sensorStore.sensors.map(sensor => (
            <SensorCard key={ sensor.id } sensor={ sensor }/>
          ))}
        </div>
      </Accordion>
    </Page>
  )
}

export default observer(DashboardPage)