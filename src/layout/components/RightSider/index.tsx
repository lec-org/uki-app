import { IconSettings } from '@arco-design/web-react/icon'

import { platforms } from '../../config'

import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function RightSider() {
	const platformsArray = Object.entries(platforms)

	return (
		<>
			<div className='right-side'>
				{/* //  todo: 注册点击事件*/}
				<IconSettings className='settings' />
				{platformsArray.map(([key, platform]) => (
					<div
						className='platform'
						key={key}
					>
						<h5 className='platform-name'>{platform.name}</h5>
						<div className='platform-items'>
							{platform.list.map((item) => (
								<a
									className='item'
									href={item.url}
									key={item.text}
									target='_blank'
								>
									<FontAwesomeIcon
										icon={item.icon}
										className='item-icon'
									/>
									<div className='item-text'>{item.text}</div>
								</a>
							))}
						</div>
					</div>
				))}
			</div>
		</>
	)
}
