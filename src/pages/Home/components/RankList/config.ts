export const rankListGrades = [
	{
		value: 2,
		text: '2022级',
	},
	{
		value: 1,
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
		dataIndex: 'userInfo',
		render: (row: User) =>
			`<img src='${row?.avatar}' alt="头像" style="width:50px; height:50px;border-radius:50%;"/>`,
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
		render: (row: User) =>
			`${
				row.completionRate !== 0
					? Math.round(row.completionRate * 100) + '%'
					: row.completionRate
			}`,
	},
	{
		title: '状态',
		dataIndex: 'status',
		render: (row: User) => `${row.status === 1 ? '内卷ing' : '休息中'}`,
	},
]
