import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'

import './index.scss'
import { Ref, useEffect, useRef, useState } from 'react'
import { clockUnderLecWifi } from '../../../../api/clock'
import { Message } from '@arco-design/web-react'

export default function ClockButton({ token }: { token: string }) {
	const [clockButtonStatus, setClockButtonStatus] = useState(false)
	const clockBtnIcon = useRef<SVGSVGElement>()
	const clockBtn = useRef<HTMLInputElement>()

	const handleBtnColorChange = async (status: boolean) => {
		const res = await clockUnderLecWifi({
			token,
		})
		// * 打卡出错
		if (res.data.data === '打卡失败！！！，请在团队内打卡') {
			// * 提示打卡失败
			Message.error(res.data.data)
			// * 让按钮无法按下
			clockBtn.current!.checked = false
			// * 设置按下状态是false
			setClockButtonStatus(false)
			return
		} else if (res.data.msg === '打卡成功!!!') {
			// * 成功 上 下 卡
			setClockButtonStatus(!status)
			if (status) Message.success('上卡成功')
			else Message.success('下卡成功')
		}

		// * 改变打卡按钮的颜色 未打卡状态(clockButttonStatus = false)为#336add
		clockBtnIcon.current!.style.color = status ? '#336add' : 'red'

		// * 改变打卡按钮图标的大小
		clockBtnIcon.current!.style.width = status ? '70px' : '65px'
		clockBtnIcon.current!.style.height = status ? '70px' : '65px'
	}
	useEffect(() => {
		// todo 首次加载时，查看打卡状态，改变打卡按钮的clockStatus
	}, [])
	return (
		<div className='clock-button'>
			<div className='clock-button-icon-container'>
				<FontAwesomeIcon
					icon={faPowerOff}
					ref={clockBtnIcon as Ref<SVGSVGElement>}
					className='clock-button-icon'
				/>
			</div>

			<input
				type='checkbox'
				ref={clockBtn as Ref<HTMLInputElement>}
				onClick={() => {
					handleBtnColorChange(clockButtonStatus)
				}}
			/>
		</div>
	)
}
