import { useMemo } from "react"
import { format } from "date-fns"
import LineChart from "@/components/chart/components/LineChart"
import { useLineChartOptions } from "@/components/chart/hooks/useLineChartOptions"

const getTooltipDefaultOptions = () => {
	return {
		displayColors: false,
		padding: 10,
		callbacks: {
			title(tooltipItems: any) {
				return format(new Date(tooltipItems[0].raw.x), 'd/L/y HH:mm:ss')
			},
			beforeLabel(tooltipItem: any) {
				return tooltipItem.raw.beforeLabel
			},
			label(tooltipItem: any) {
				return tooltipItem.raw.label
			},
			afterLabel(tooltipItem: any) {
				return tooltipItem.raw.afterLabel
			},
		}
	}
}

const getLineAnnotation = (xMin: number, xMax: number, threshold: number, color: string): any => {
	return {
		threshold: {
			type: "line",
			drawTime: "beforeDatasetsDraw",
			yMin: threshold,
			yMax: threshold,
			xMin,
			xMax,
			borderColor: color,
			borderWidth: 3,
		},
	}
}

const useChartLimits = (rangeValueMs: number) => {
  return useMemo(() => {
    const currentEpochMs = new Date().getTime()
    const xOffset = Math.round(rangeValueMs * 0.05) 

    const xMin = currentEpochMs - rangeValueMs - xOffset
    const xMax = currentEpochMs + xOffset

    return { 
			xMin, 
			xMax 
		}
  }, [ rangeValueMs ])
}

export { getTooltipDefaultOptions, getLineAnnotation, useLineChartOptions, useChartLimits }
export default LineChart
