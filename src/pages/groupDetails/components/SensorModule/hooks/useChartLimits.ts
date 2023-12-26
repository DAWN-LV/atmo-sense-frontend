import { useMemo } from "react"

export const useChartLimits = (rangeValueMs: number) => {
	return useMemo(() => {
		const currentEpochMs = Date.now()
		const x_offset = +(rangeValueMs * 0.05).toFixed(0) // 5% from total range

		return {
			xMin: currentEpochMs - rangeValueMs - x_offset,
			xMax: currentEpochMs + x_offset
		}
	}, [rangeValueMs])
}
