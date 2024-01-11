import { ChartOptions } from "chart.js"

interface Props {
  yMin: number
  yMax: number
  threshold: number
}

export const useSensorOptions = ({ yMin, yMax, threshold }: Props) => ({
  scales: {
    x: {
      type: "time",
      time: {
        tooltipFormat: "PPpp",
        displayFormats: {
          quarter: "MMM yyyy",
          month: "MMM yyyy",
          day: "MMM dd",
          hour: "MMM dd",
          minute: "HH:mm",
        },
      },
      title: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      min: yMin,
      max: yMax,
    },
  },
  maintainAspectRatio: false,
  plugins: {
    annotation: {
      annotations: [{
        type: 'line',
        scaleID: 'y',
        value: threshold, 
        borderColor: 'orange',
        borderDash: [ 5, 10 ], 
        borderWidth: 2
      }]
    },
    legend: {
      display: false,
    },
    zoom: {
      pan: {
        enabled: true,
        mode: "x",
      },
      zoom: {
        wheel: {
          enabled: true,
        },
        pinch: {
          enabled: true,
        },
        mode: "x",
      },
    },
  },
}) as ChartOptions<"line">