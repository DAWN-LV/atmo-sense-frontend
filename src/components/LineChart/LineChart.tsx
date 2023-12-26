import React, { useEffect, useRef } from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  Point,
} from "chart.js"
import "chartjs-adapter-date-fns"
import zoomPlugin from "chartjs-plugin-zoom"
import annotationPlugin from "chartjs-plugin-annotation"
import { Line } from "react-chartjs-2"
import { LineChartAnnotationsType, useLineChartOptions } from "@/components/LineChart/useLineChartOptions"

ChartJS.register(
  CategoryScale,
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  zoomPlugin,
  annotationPlugin
);

interface ILineChartDataPoint extends Point {
  beforeLabel: string,
  label: string,
  afterLabel: string
}

interface Props {
  xMin: number,
  xMax: number,
  yMin: number,
  yMax: number,
  data: ChartData<"line", ILineChartDataPoint[], unknown>,
  tooltip?: any, //LineChartTooltipType,
  annotations?: LineChartAnnotationsType,
  height: number
}

const LineChart: React.FC<Props> = ({
  xMin,
  xMax,
  yMin,
  yMax,
  data,
  tooltip,
  annotations,
  height
}) => {
  const chartRef = useRef<any>()
  const options = useLineChartOptions(xMin, xMax, yMin, yMax, tooltip, annotations)

  useEffect(() => {
    return () => {
      // console.log('chartRef.current = ', chartRef.current)

      if (chartRef.current) { // !!!!!!!!!!!!!!!!
        chartRef.current?.destroy()
        // ChartJS.getChart()
      }
    }
  }, [])

  return (
    <Line
      // ref={chartRef} 
      height={height}
      options={options} 
      data={data} 
      className='max-h-96 max-w-80'
      redraw={true}
    />
  )
}

export default React.memo(LineChart)
