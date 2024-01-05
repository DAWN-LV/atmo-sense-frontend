import React, { useEffect, useMemo, useRef } from "react"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  ChartOptions,
  ChartData,
} from "chart.js"
import zoomPlugin from "chartjs-plugin-zoom"
import annotationPlugin from "chartjs-plugin-annotation"

import "chartjs-adapter-date-fns"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale,
  Title,
  Tooltip,
  Legend,
  zoomPlugin,
  annotationPlugin,
)

interface ILineChartDataPoint {
  x: number | string | Date
  y: number
}

interface Props {
  points: ILineChartDataPoint[]
  externalOptions?: ChartOptions
}

const LineChart: React.FC<Props> = ({ points, externalOptions  }) => {
  const chartRef = useRef<any>()

  const data: ChartData<"line"> = useMemo(() => ({
    labels: points.map(point => point.x as string),
    datasets: [
      {
        label: "Value",
        data: points.map((point) => point.y),
        borderColor: "rgb(37, 99, 235)",
        backgroundColor: "#fff",
        tension: 0.4,
      },
    ],
  }), [ points ])

  const options: ChartOptions<"line"> = useMemo(() => ({
    scales: {
      x: {
        type: "time",
        time: {
          tooltipFormat: "PPpp",
          displayFormats: {
            quarter: "MMM yyyy",
            month: "MMM yyyy",
            day: "MMM dd",
            hour: "HH:mm",
            minute: "HH:mm",
          },
        },
        title: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      zoom: {
        pan: {
          enabled: true,
          mode: "xy",
        },
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: "xy",
        },
      },
    },
    ...externalOptions,
  }) as ChartOptions<'line'>, [ externalOptions ])

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.resetZoom()
    }
  }, [ points ])

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy()
      }
    }
  }, [])

  return (
    <Line 
      ref={ chartRef }
      options={ options } 
      data={ data } 
      className="max-h-96 max-w-80"
    />
  )
}

export default React.memo(LineChart)
