import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'

import './index.scss'
import { useRef, useState } from 'react'

export default function ClockButton() {
	const [clockButtonStatus, setClockButtonStatus] = useState(false)
	const clockBtn = useRef(null)

	const handleBtnColorChange = (status: boolean) => {
		clockBtn.current.style.color = status ? 'green' : 'red'
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
