import Header from './components/Header'
import RightSider from './components/RightSider'
import LeftSider from './components/LeftSider'
import Content from './components/Content'

import { Layout as ALayout } from '@arco-design/web-react'

import './index.scss'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const LayoutSider = ALayout.Sider
const LayoutHeader = ALayout.Header
const LayoutContent = ALayout.Content
const LayoutFooter = ALayout.Footer

export default function Layout() {
	const navigate = useNavigate()
	const avatar = localStorage.getItem('avatar') || ''
	useEffect(() => {
		navigate('/home')
	}, [])
	return (
		<ALayout className='basic-layout'>
			<LayoutHeader className='header'>
				<Header avatarUrl={avatar}></Header>
			</LayoutHeader>

			<div className='main'>
				<LayoutSider
					collapsible
					breakpoint='xl'
					className='sider'
				>
					<LeftSider></LeftSider>
				</LayoutSider>

				<LayoutContent className='content'>
					<Content></Content>
				</LayoutContent>

				<LayoutSider className='sider right-sider'>
					<RightSider></RightSider>
				</LayoutSider>
			</div>

			<LayoutFooter className='footers'></LayoutFooter>
		</ALayout>
	)
}
