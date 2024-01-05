import { useMemo } from "react"
import {
  ElementChartOptions,
  CoreChartOptions,
  PluginChartOptions,
  DatasetChartOptions,
  ScaleChartOptions,
  LineControllerChartOptions,
  TooltipOptions,
} from "chart.js"
import { lv } from "date-fns/locale"
import { AnnotationOptions } from "chartjs-plugin-annotation"
import { _DeepPartialObject } from "node_modules/chart.js/dist/types/utils"
import { getTooltipDefaultOptions } from "@/components/chart"

type LineChartOptions = _DeepPartialObject<
  CoreChartOptions<"line"> &
  ElementChartOptions<"line"> &
  PluginChartOptions<"line"> &
  DatasetChartOptions<"line"> &
  ScaleChartOptions<"line"> &
  LineControllerChartOptions
>

export type LineChartAnnotationsType = Record<string, AnnotationOptions<"box"> | AnnotationOptions<"line">>
export type LineChartTooltipType = TooltipOptions<"line">

export const useLineChartOptions = (
  xMin: number,
  xMax: number,
  yMin: number,
  yMax: number,
  tooltip: LineChartTooltipType,
  annotations?: LineChartAnnotationsType
): LineChartOptions => {
  return useMemo(() => {
    return {
      responsive: true,
      elements: {
        line: {
          tension: 0.4,
          borderWidth: 1
        },
        point: {
          radius: 3,
          hoverBackgroundColor: "white",
          hoverRadius: 6,
          hitRadius: 100
        }
      },
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
            minUnit: "second"
          },
          ticks: {
            maxRotation: 30,
            minRotation: 10,
            autoSkipPadding: 7,
            autoSkip: true,
          },
          adapters: {
            date: {
              locale: lv
            }
          }
        },
        y: {
          min: yMin,
          max: yMax,
          grace: '20%',
          title: {
            display: true,
            text: "Value"
          }
        }
      },
      plugins: {
        tooltip: tooltip ? tooltip : getTooltipDefaultOptions(),
        legend: {
          position: 'top',
          display: false
        },
        title: {
          display: false,
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
        annotation: { annotations }
      },
    };
  }, [xMin, xMax, yMin, yMax, tooltip, annotations])
}
