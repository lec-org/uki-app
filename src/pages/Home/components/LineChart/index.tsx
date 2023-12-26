import * as echarts from 'echarts'
import { useEffect, useRef, useState } from 'react'
import { clockLineChartOption } from './config'

import './index.scss'

const LineChart = ({ dayClockTimeData }: { dayClockTimeData: number[] }) => {
	console.log(dayClockTimeData)

	// * 获取折线图DOM
	const chartRef = useRef(null)
	// * 作为折线图的数据来源
	const [dataList, setDataList] = useState<number[][]>([])

	// const fake = [0, 16, 0, 0, 0, 0, 0]

	const updateChart = () => {
		// * 初始化折线图
		const lineChart = echarts.init(chartRef.current)
		dataList.push(dayClockTimeData)
		console.log(dataList)

		clockLineChartOption.series = clockLineChartOption.series.map(
			(config, index) => {
				return {
					...config,
					data: dataList[index] ?? [],
				}
			}
		)
		lineChart.setOption(clockLineChartOption)
		window.addEventListener('resize', () => {
			lineChart.resize()
		})
	}
	useEffect(() => {
		console.log('--渲染--LineChart--组件--')

		updateChart()
	})
	return (
		<div
			id='home-content-line-echart'
			ref={chartRef}
		></div>
	)
}

export default LineChart
