import { Menu } from '@arco-design/web-react'
import { sidebarItems } from '../../config'
import { useLocation, useNavigate } from 'react-router-dom'

import './index.scss'
import { useEffect, useState } from 'react'
export default function LeftSider() {
	// * 引入路由Hook
	const navigate = useNavigate()
	const location = useLocation()
	const [leftSideBarSelectItem, setLeftSideBarSelectItem] = useState([
		location.pathname,
	])
	useEffect(() => {
		setLeftSideBarSelectItem([location.pathname])
	}, [location.pathname])
	// * 引入路径Hook

	return (
		<Menu
			defaultSelectedKeys={leftSideBarSelectItem}
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
