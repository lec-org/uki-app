import Header from './components/Header'
import RightSider from './components/RightSider'
import LeftSider from './components/LeftSider'
import Content from './components/Content'

import { Layout as ALayout } from '@arco-design/web-react'

import './index.scss'

const LayoutSider = ALayout.Sider
const LayoutHeader = ALayout.Header
const LayoutContent = ALayout.Content
const LayoutFooter = ALayout.Footer
export default function Layout() {
	return (
		<ALayout className='basicLayout'>
			<LayoutHeader className='header'>
				<Header></Header>
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

				<LayoutSider className='sider rightSider'>
					<RightSider></RightSider>
				</LayoutSider>
			</div>

			<LayoutFooter className='footers'></LayoutFooter>
		</ALayout>
	)
}
