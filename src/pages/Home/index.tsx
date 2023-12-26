import { Layout as ALayout, Message } from '@arco-design/web-react'
import ClockButton from './components/ClockButton'
import ClockInfo from './components/ClockInfo'
import LineChart from './components/LineChart'
import RankList from './components/RankList'

import './index.scss'
import { useEffect, useState } from 'react'
import { Login, getLoginStatus } from '../../api/user'
import { getUserWeekClockTime } from '../../api/clock'

export default function Home() {
	const [weekClock, setWeekClock] = useState<number[]>([])
	const nickname = localStorage.getItem('nickname') || ''
	let token =
		localStorage.getItem('token') ||
		'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MDM1ODczNDUsInVzZXJJZCI6MTk5Nzk3MzY4OTc4MTQ1Mjh9.QSaDHanZxZNEx3qTeMy90TMiVj0x2APvu2yXU2ylCp8'

	const toLogin = async () => {
		const res = await Login({ username: 'cxhzs', password: 'Cxhzs067311.' })
		// console.log(res)

		// * 记录下返回的数据x
		localStorage.setItem('token', res.data.data.token)
		localStorage.setItem('avatar', res.data.data.userInfoVo.avatar)
		localStorage.setItem('grade', res.data.data.userInfoVo.grade.toString())
		localStorage.setItem('id', res.data.data.userInfoVo.id)
		localStorage.setItem('nickname', res.data.data.userInfoVo.nickname)

		token = localStorage.getItem('token') as string
	}
	const getEveryDayClockTime = async () => {
		Message.info('已获取打卡数据')
		// * 清空数组
		setWeekClock([])

		// * 获取本周每日打卡时长
		const dayClockData = await getUserWeekClockTime({
			token,
		})
		console.log(dayClockData.data.data)

		const week = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
		for (const i of week) {
			weekClock.push(dayClockData.data.data[i])
		}
		console.log(weekClock)
	}
	const checkToken = async () => {
		const res = await getLoginStatus({ token })
		console.log(res.data)

		if (res.data.code !== 200 || !res.data) {
			localStorage.removeItem('token')
			Message.error('Token 过期啦~~')
			// todo: 等下写个过期自动再次登录
			toLogin()
			checkToken()
		}

		Message.success('登录成功	')
		// * 如果token未过期 获取数据
		// * 获取每日打卡时长 ，
		getEveryDayClockTime()
		return
	}

	useEffect(() => {
		// * 页面挂载时检查token
		checkToken()
	}, [])
	return (
		<>
			<div className='home-content-wrapper'>
				<div className='home-content-left'>
					<ALayout>
						<ALayout.Header className='home-content-header'>
							<ClockInfo nickName={nickname} />
						</ALayout.Header>

						<ALayout.Content className='home-content-main'>
							<ClockButton token={token} />
							<LineChart dayClockTimeData={weekClock} />
						</ALayout.Content>

						<ALayout.Footer>
							<RankList />
						</ALayout.Footer>
					</ALayout>
				</div>
			</div>
		</>
	)
}
