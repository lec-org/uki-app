import { Layout as ALayout } from '@arco-design/web-react'
import ClockButton from './components/ClockButton'
import ClockInfo from './components/ClockInfo'
import LineChart from './components/LineChart'
import RankList from './components/RankList'

import './index.scss'

export default function Home() {
	return (
		<>
			<div className='home-content-wrapper'>
				<div className='home-content-left'>
					<ALayout>
						<ALayout.Header className='home-content-header'>
							<ClockInfo />
						</ALayout.Header>

						<ALayout.Content className='home-content-main'>
							<ClockButton />
							<LineChart />
						</ALayout.Content>

						<ALayout.Footer>
							<RankList />
						</ALayout.Footer>
					</ALayout>
				</div>
			</div>
		</>
	)
}
