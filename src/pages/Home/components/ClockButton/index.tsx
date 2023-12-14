import { IconPoweroff } from '@arco-design/web-react/icon'
import './index.scss'
export default function ClockButton() {
	return (
		<>
			<div className='clock-button'>
				<IconPoweroff className='power-off-icon' />
				<input type='checkbox' />
			</div>
		</>
	)
}
