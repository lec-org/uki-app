import {
	IconCalendarClock,
	IconHome,
	IconQuestionCircle,
} from '@arco-design/web-react/icon'
import { faBilibili, faGithub } from '@fortawesome/free-brands-svg-icons'
import {
	faBook,
	faHouse,
	faPen,
	faStar,
} from '@fortawesome/free-solid-svg-icons'

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

export const platforms = {
	internDevelopment: {
		name: '内部产品导航',
		list: [
			{
				icon: faGithub,
				text: '乐程开源',
				url: 'https://github.com/lec-org',
			},
		],
	},
	externalApplication: {
		name: '第三方产品导航',
		list: [
			{
				icon: faStar,
				text: '学习通',
				url: 'https://i.chaoxing.com/',
			},
			{
				icon: faBilibili,
				text: 'bilibili',
				url: 'https://www.bilibili.com/',
			},
			{
				icon: faHouse,
				text: '学校官网',
				url: 'https://www.swpu.edu.cn/',
			},
			{
				icon: faBook,
				text: '教务处',
				url: 'https://www.swpu.edu.cn/dean/searchList.jsp?wbtreeid=1193',
			},
			{
				icon: faPen,
				text: '力扣',
				url: 'https://leetcode.cn/',
			},
			{
				icon: faPen,
				text: '洛谷',
				url: 'https://www.luogu.com.cn/',
			},
		],
	},
}
