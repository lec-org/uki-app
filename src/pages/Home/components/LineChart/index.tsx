import * as echarts from 'echarts'
import { useEffect, useRef } from 'react'
import { clockLineChartOption } from './config'

import './index.scss'

export default function LineChart() {
	const weekClockData = [5, 7, 4, 3, 6, 8, 9]
	const chartRef = useRef(null)
	const dataList = useRef([])
	const updateChart = () => {
		const lineChart = echarts.init(chartRef.current)
		dataList.current.push(weekClockData)
		clockLineChartOption.series = clockLineChartOption.series.map(
			(config, index) => {
				return {
					...config,
					data: dataList.current[index] ?? [],
				}
			}
		)
		lineChart.setOption(clockLineChartOption)
		window.addEventListener('resize', () => {
			lineChart.resize()
		})
	}
	useEffect(() => {
		updateChart()
			updateChart()
	})
	return (
		<div
			id='home-content-line-echart'
			ref={chartRef}
		></div>
	)
}
