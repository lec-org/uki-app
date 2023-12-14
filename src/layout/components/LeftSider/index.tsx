import { Menu } from '@arco-design/web-react'
import { sidebarItems } from '../../config'
import { useLocation, useNavigate } from 'react-router-dom'

import './index.scss'
export default function LeftSider() {
	// * 引入路由Hook
	const navigate = useNavigate()
	// * 引入路径Hook
	const location = useLocation()

	return (
		<Menu
			defaultSelectedKeys={[location.pathname]}
			style={{ width: '100%' }}
		>
			{sidebarItems.map((item) => (
				<>
					<Menu.Item
						key={item.key}
						onClick={() => {
							item.key != '-1' ? navigate(item.key) : null
						}}
					>
						<item.icon />
						{item.label}
					</Menu.Item>
				</>
			))}
		</Menu>
	)
}
