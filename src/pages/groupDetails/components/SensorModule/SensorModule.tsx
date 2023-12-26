import React, { memo, useMemo, useState } from 'react'

import SensorModel from '@/store/sensor/SensorModel'
import LineChart from '@/components/LineChart'
import RangeSelector from '../RangeSelector'

import { getLineAnnotation } from '@/components/LineChart/utils'
import { useSensorChartData } from './hooks/useSensorChartData'
import { useChartLimits } from './hooks/useChartLimits'

const threshold = 720
const day = 86400
const ranges = [
	{ label: '1Y', value: day * 365 },
	{ label: '6M', value: day * 180 },
	{ label: '30D', value: day * 30 },
	{ label: '7D', value: day * 7 },
	{ label: '1D', value: day },
	{ label: 'Realtime', value: 0 },
]

interface Props {
	sensor: SensorModel
}

const SensorModule: React.FC<Props> = ({ sensor }) => {
	const [activeRange, setActiveRange] = useState(4)

	const chartData = useSensorChartData(sensor.id, ranges[activeRange].value)
	const limits = useChartLimits(ranges[activeRange].value * 1000)
	const annotations = useMemo(() => {
		return getLineAnnotation(limits.xMin, limits.xMax, threshold, 'orange')
	}, [limits])

	return (
		<>
			<RangeSelector
				ranges={ranges}
				activeRange={activeRange}
				onSelect={setActiveRange}
			/>

			<LineChart
				xMin={limits.xMin}
				xMax={limits.xMax}
				yMin={0}
				yMax={1000}
				data={chartData}
				annotations={annotations}
				height={400}
			/>
		</>
	)
}

export default memo(SensorModule)
