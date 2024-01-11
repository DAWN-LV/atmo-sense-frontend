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
  ChartData,
} from "chart.js"
import zoomPlugin from "chartjs-plugin-zoom"
import annotationPlugin from "chartjs-plugin-annotation"
import { calculateLinearRegression } from "@/utils"

import "chartjs-adapter-date-fns"
import { useSensorOptions } from "./options/useSensorOptions"

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

interface Point {
  x: number
  y: number
}

interface Props {
  points: Point[]

  yMin: number
  yMax: number
  threshold: number
}

const prepareChartData = (points: Point[]) => {
  const sorted = [ ...points ].sort((a, b) => a.x - b.x)

  if (sorted.length <= 2) {
    return { sorted: sorted, predicted: undefined }
  }

  const { m, b } = calculateLinearRegression(sorted)
  const nextX = sorted[sorted.length - 1].x + Math.abs(sorted[0].x - sorted[1].x)
  const nextY = m * nextX + b

  return { sorted: sorted, predicted: { x: nextX, y: nextY } }
}

const LineChart: React.FC<Props> = ({ points, yMin, yMax, threshold }) => {
  const chartRef = useRef<any>()

  const { sorted, predicted } = useMemo(() => prepareChartData(points), [ points ])
  const options = useSensorOptions({ yMin, yMax, threshold })

  const data: ChartData<"line"> = useMemo(() => ({
    labels: sorted.map(point => point.x).concat(predicted ? [ predicted.x ] : []),
    datasets: [
      {
        label: "Value",
        data: sorted.map(point => point.y),
        borderColor: "rgb(37, 99, 235)",
        backgroundColor: "#fff",
        tension: 0.4,
      },
      {
        label: "Prediction",
        data: [ ...Array(sorted.length - 1).fill(null), sorted[sorted.length - 1].y ].concat(predicted ? [ predicted.y ] : []),
        borderColor: "rgb(140, 140, 140)",
        backgroundColor: "#fff",
        borderDash: [ 5, 10 ],
        tension: 0.4,
      }
    ],
  }), [ points ])

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
