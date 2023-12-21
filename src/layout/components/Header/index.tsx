import { Avatar, Dropdown, Menu } from '@arco-design/web-react'
import { avatarDropdownItems } from '../../config'
import './index.scss'

const dropList = (
	<Menu>
		{avatarDropdownItems.map((item) => (
			<Menu.Item key={item.key}>
				<span> {item.label}</span>
			</Menu.Item>
		))}
	</Menu>
)

export default function Header({ avatarUrl }) {
	return (
		<>
			<div className='basicHeader'>
				<div className='left'>
					<div className='logo'>
						<img
							src='/lec@640x640.png'
							alt='愉刻Uki'
							className='pic'
						/>
						<div className='text'>
							<i>Uki Clock System</i>
						</div>
					</div>
				</div>
				<div className='right'>
					<Dropdown
						droplist={dropList}
						trigger='click'
					>
						<Avatar
							size={42}
							className='avatar'
						>
							<img
								src={avatarUrl}
								alt=''
							/>
						</Avatar>
					</Dropdown>
				</div>
			</div>
		</>
	)
}
