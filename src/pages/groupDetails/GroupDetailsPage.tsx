import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { useParams } from 'react-router-dom'

import Page from '@/components/Page'
import SensorModule from './components/SensorModule/SensorModule'

import { useAppStore } from '@/providers'

interface Props {

}

const GroupDetailsPage: React.FC<Props> = () => {
	const params = useParams()
	const { sensorStore: { sensors } } = useAppStore() // have to filter sensors for specific group

	useEffect(() => {
		// [fetch / get from store] all sensors which are belongs to group
	}, [params.id])

	return (
		<Page breadcrumb={["group", "details"]}>
			{sensors.map((el) => (
				<SensorModule key={el.id} sensor={el}/>
			))}
		</Page>
	)
}

export default observer(GroupDetailsPage)
