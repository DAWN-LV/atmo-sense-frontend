import React, { useEffect, useRef } from 'react'
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
} from 'chart.js';
import 'chartjs-adapter-date-fns';
import zoomPlugin from 'chartjs-plugin-zoom';
import annotationPlugin from 'chartjs-plugin-annotation';
import { Line } from 'react-chartjs-2';
import { useLineChartOptions } from './useLineChartOptions';

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

const arr = Array(100).fill(null)

const data: ChartData<"line", (number | Point | null)[], unknown> = {
  datasets: [
    {
      label: 'Sensor Data',
      data: arr.map((_, i) => ({
        y: Math.random() * 100,
        x: +(Date.now() / 1000).toFixed(0) - 100000 + ((i + 1) * 300)
      })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ]
}

interface Props {
  threshold: number,
  xMin: number,
  xMax: number
}

const LineChart: React.FC<Props> = ({ xMin, xMax }) => {
  const chartRef = useRef<any>()
  const options = useLineChartOptions(xMin, xMax, 0, 100)

  useEffect(() => {
    return () => {
      // console.log('chartRef.current = ', chartRef.current)

      if (chartRef.current) { // !!!!!!!!!!!!!!!!
        chartRef.current?.destroy();
      }
    }
  }, [])

  return (
    <Line
      // ref={chartRef} 
      options={options} 
      data={data} 
      className='max-h-96 max-w-80'
    />
  )
}

export default React.memo(LineChart)
