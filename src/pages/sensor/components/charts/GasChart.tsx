import LineChart from "@/components/chart"
import TemplateModule from "@/store/sensor/config/TemplateModel"
import SensorModel from "@/store/sensor/sensors/SensorModel"

interface Props {
  sensor: SensorModel,
  template: TemplateModule, 
  points: Point[],
}

const GasChart: React.FC<Props> = ({ sensor, template, points }) => {
  const modifiedPoints = points.map(point => ({ ...point, y: Math.ceil(point.y) }))

  return (
    <LineChart 
      points={ modifiedPoints } 
      yMin={ template.data.min } 
      yMax={ template.data.max } 
      threshold={ template.data.threshold || 0 }
    />
  )
}    

export default GasChart