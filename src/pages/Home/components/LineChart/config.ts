import * as echarts from 'echarts'

const gradientColorFac = (
	points: [number, number, number, number],
	colors?: Array<{ offset: number; color: string }>
) => {
	const colorConfigs = colors || [
		{
			offset: 0,
			color: '#5fe4ff',
		},
		{
			offset: 0.4,
			color: '#2e91ff',
		},
		{
			offset: 0.5,
			color: '#666ffd',
		},
		{
			offset: 1,
			color: '#6f42fb',
		},
	]

	return new echarts.graphic.LinearGradient(...points, colorConfigs)
}
const commonPartOfClockLineChart = {
	type: 'line',
	smooth: true, //是否平滑曲线显示
	showAllSymbol: true,
	symbol: 'circle',
	symbolSize: 14,
	lineStyle: {
		normal: {
			color: gradientColorFac([0, 0, 1, 0]),
		},
	},
	itemStyle: {
		normal: {
			color: '#ffffff', //拐点颜色
			borderColor: gradientColorFac([0, 0, 1, 1]), //拐点边框颜色
			borderWidth: 4,
			lineStyle: {
				width: 5.5,
			},
		},
	},
	tooltip: {
		show: true,
	},
	areaStyle: {
		normal: {
			color: gradientColorFac(
				[0, 0, 0, 1],
				[
					{
						offset: 0,
						color: '#eb64fb',
					},
					{
						offset: 1,
						color: '#3fbbff0d',
					},
				]
			),
		},
	},
}

// echarts 折线图的配置，数据部分关注 series 字段即可，样式部分则是其余字段
export const clockLineChartOption = {
	title: {
		text: '每周打卡数据',
		left: 'center',
		bottom: '5%',
		textStyle: {
			color: '#fff',
			fontSize: 16,
		},
	},
	tooltip: {
		trigger: 'axis',
		// 鼠标经过柱体的背景
		axisPointer: {
			type: 'line',
			z: 0, // 层级（权重）
			lineStyle: {
				type: 'solid', // 将虚线改为实线
				width: 40, // 设置背景的宽度
				color: gradientColorFac(
					[0, 0, 0, 1],
					[
						{
							offset: 0,
							color: '#ffffff77',
						},
						{
							offset: 0.7,
							color: '#b9dbfc77',
						},
					]
				),
			},
		},
	},
	grid: {
		top: '20%',
		left: '10%',
		right: '10%',
		bottom: '15%',
		containLabel: true,
	},
	xAxis: {
		type: 'category',
		boundaryGap: false,
		data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
		axisLabel: {
			margin: 18,
			color: '#86909C',
		},
		axisLine: {
			show: true,
		},
		axisTick: {
			show: true,
			length: 25,
			lineStyle: {
				color: '#ffffff1f',
			},
		},
	},
	yAxis: [
		{
			type: 'value',
			position: 'left',
			axisLabel: {
				margin: 20,
				color: '#86909C',
			},
			axisTick: {
				show: true,
				length: 15,
				lineStyle: {
					color: '#ffffff1f',
				},
			},
			axisLine: {
				show: false,
				formatter: (val: string) => `${val}H`,
			},
			splitLine: {
				show: true,
				lineStyle: {
					type: 'dashed',
				},
			},
		},
	],
	// Data 由外部组件配置
	series: [
		{
			name: '打卡时间',
		},
	].map((obj) => ({ ...obj, ...commonPartOfClockLineChart })),
}
