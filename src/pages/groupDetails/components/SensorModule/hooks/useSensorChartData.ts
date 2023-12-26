import SensorApi from "@/store/sensor/SensorApi"
import { useCallback, useEffect, useState } from "react"

export const useSensorChartData = (id: number, from: number) => {
	const [ data, setData ] = useState<any>({ datasets: [] })

    const fetchData = useCallback(async () => {
		try {
			const res = await SensorApi.fetchData(id, { 
				from, 
				to: 0
			})

			const parsedData = res.values.map((el: any) => {
        return {
          x: el[0],
          y: el[1],
          beforeLabel: `max: ${el[3]}`,
          label: `avg: ${el[1]}`,
          afterLabel: `min: ${el[2]}`
        }
      })

			setData({
        datasets: [
          {
            data: parsedData,
            borderColor: 'rgb(37, 99, 235)',
            backgroundColor: 'rgba(37, 99, 235, 0.5)',
          }
        ]
      })
		} catch (error) {
			console.log(error)
		}
	}, [id,, from])

	useEffect(() => {
    fetchData()
  }, [fetchData])

  return data
}