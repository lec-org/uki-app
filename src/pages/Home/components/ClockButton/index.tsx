import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'

import './index.scss'
import { useRef, useState } from 'react'

export default function ClockButton() {
	const [clockButtonStatus, setClockButtonStatus] = useState(false)
	const clockBtn = useRef(null)

	const handleBtnColorChange = (status: boolean) => {
		// * 改变打卡按钮的颜色 未打卡状态(clockButttonStatus = false)为#336add
		clockBtn.current.style.color = status ? '#336add' : 'red'
		// * 改变打卡按钮图标的大小
		clockBtn.current.style.width = status ? '70px' : '65px'
		clockBtn.current.style.height = status ? '70px' : '65px'
	}

	return (
		<div className='clock-button'>
			<div className='clock-button-icon-container'>
				<FontAwesomeIcon
					icon={faPowerOff}
					ref={clockBtn}
					className='clock-button-icon'
				/>
			</div>

			<input
				type='checkbox'
				onClick={() => {
					setClockButtonStatus(!clockButtonStatus)
					handleBtnColorChange(clockButtonStatus)
				}}
			/>
		</div>
	)
}
