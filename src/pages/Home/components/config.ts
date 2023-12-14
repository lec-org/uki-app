import Day from 'dayjs'

export const clockInfoDataList = [
	{
		title: '本周打卡',
		unit: 'h',
		maxValue: 38,
		icon: '../../../../public/doc.png',
	},
	{
		title: '当前排名',
		unit: '名',
		maxValue: 38,
		icon: '../../../../public/task.png',
	},
	{
		title: '今日截止事项',
		unit: '个',
		maxValue: 10,
		icon: '../../../../public/chat.png',
	},
]

const oneDayTime = 24 * 60 * 60 * 1000 // * 24h * 60 min * 60 sec * 1000 ms

const dateFormatter = (date: Date) => {
	return Day(date.getTime()).format('MM/DD')
}

export const weatherInfoList = [
	{
		date: dateFormatter(new Date()),
		text: '今天',
		weather: '',
	},
	{
		date: dateFormatter(new Date(new Date().getTime() + oneDayTime)),
		text: '明天',
		weather: '',
	},
	{
		date: dateFormatter(new Date(new Date().getTime() + oneDayTime * 2)),
		text: '后天',
		weather: '',
	},
]
