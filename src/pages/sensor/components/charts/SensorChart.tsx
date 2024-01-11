import LineChart from "@/components/chart"
import TemplateModule from "@/store/sensor/config/TemplateModel"
import SensorModel from "@/store/sensor/sensors/SensorModel"

interface Props {
  sensor: SensorModel,
  template: TemplateModule, 
  points: Point[],
}

const SensorChart: React.FC<Props> = ({ sensor, template, points }) => {
  return (
    <LineChart 
      points={ points } 
      yMin={ template.data.min } 
      yMax={ template.data.max } 
      threshold={ template.data.threshold || 0 }
    />
  )
}    

export default SensorChart