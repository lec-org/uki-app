import {
	IconCalendarClock,
	IconHome,
	IconQuestionCircle,
} from '@arco-design/web-react/icon'
export const sidebarItems = [
	{
		key: '/home',
		icon: IconHome,
		label: '工作台',
	},
	{
		key: '/calendar',
		icon: IconCalendarClock,
		label: '日程表',
	},
	{
		key: '-1',
		icon: IconQuestionCircle,
		label: '更多功能',
	},
]

export const avatarDropdownItems = [
	{
		key: '1',
		label: '个人设置',
	},
	{
		key: '2',
		label: '退出登录',
	},
]
