export const rankListGrades = [
	{
		value: 2022,
		text: '2022级',
	},
	{
		value: 2023,
		text: '2023级',
	},
]

export interface User {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[x: string]: any
	avatar: string
	nickname: string
	totalDuration: number
	targetDuration: number
	grade: number
	status: number
}
export const rankListColumns = [
	{
		title: '排名',
		dataIndex: 'rank',
	},
	{
		title: '用户名',
		dataIndex: 'nickname',
	},
	{
		title: '用户信息',
		dataIndex: 'avatar',
		render: (row: string) => (
			<img
				src={row}
				alt='头像'
				style={{ width: '50px', height: '50px', borderRadius: '50%' }}
			/>
		),
	},
	{
		title: '当前时长',
		dataIndex: 'currentTime',
	},
	{
		title: '目标时长',
		dataIndex: 'targetTime',
	},
	{
		title: '完成度',
		dataIndex: 'completionRate',
		render: (row: number) => `${row !== 0 ? Math.round(row * 100) + '%' : row}`,
	},
	{
		title: '状态',
		dataIndex: 'status',
		render: (row: number) => `${row === 1 ? '内卷ing' : '休息中'}`,
	},
]
