import {
  ElementChartOptions,
  CoreChartOptions,
  PluginChartOptions,
  DatasetChartOptions,
  ScaleChartOptions,
  LineControllerChartOptions,
} from "chart.js"
import { enGB } from "date-fns/locale"
import { _DeepPartialObject } from "node_modules/chart.js/dist/types/utils"
import { useMemo } from "react"

type LineChartOptions = _DeepPartialObject<
  CoreChartOptions<"line"> &
  ElementChartOptions<"line"> &
  PluginChartOptions<"line"> &
  DatasetChartOptions<"line"> &
  ScaleChartOptions<"line"> &
  LineControllerChartOptions
>

export const useLineChartOptions = (
  xMin: number,
  xMax: number,
  yMin: number,
  yMax: number
): LineChartOptions => {
  return useMemo(() => {
    const x_offset = (xMax - xMin) * 0.1 // 10% from total range

    xMin = xMin - x_offset
    xMax = xMax + x_offset

    return {
      responsive: true,
      scales: {
        x: {
          min: xMin,
          max: xMax,
          type: 'time',
          bounds: "ticks",
          title: {
            display: true,
            text: "Time"
          },
          time: {
            minUnit: "second",
          },
          ticks: {
            maxRotation: 30,
            minRotation: 10,
            autoSkipPadding: 7,
            autoSkip: true
          },
          adapters: {
            date: {
              locale: enGB
            }
          }
        },
        y: {
          title: {
            display: true,
            text: "Value"
          }
        }
      },
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Title text',
        },
        zoom: {
          limits: {
            x: { min: xMin, max: xMax }
          },
          zoom: {
            mode: "x",
            wheel: {
              enabled: true,
              speed: 0.2,
              modifierKey: "ctrl"
            },
          },
          pan: {
            enabled: true,
            mode: "x",
          }
        },
        annotation: {
          annotations: {
            box1: {
              type: "box",
              drawTime: "beforeDatasetsDraw",
              backgroundColor: "transparent",
              yMax,
              yMin,
              xMin,
              xMax,
            },
            threshold: {
              type: "line",
              drawTime: "beforeDatasetsDraw",
              yMin: 70,
              yMax: 70,
              xMin,
              xMax,
              borderColor: 'orange',
              borderWidth: 2,
            },
          }
        }
      },
    };
  }, [])
}
