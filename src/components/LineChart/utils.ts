import { format } from "date-fns"
import { LineChartAnnotationsType } from "./useLineChartOptions"

export const getTooltipDefaultOptions = () => {
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

export const getLineAnnotation = (xMin: number, xMax: number, threshold: number, color: string): LineChartAnnotationsType => {
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
