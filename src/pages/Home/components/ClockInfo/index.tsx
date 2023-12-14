import { weatherInfoList, clockInfoDataList } from '../../config'

import './index.scss'
export default function ClockInfo() {
	return (
		<div className='clock-info'>
			<h2>🎉 欢迎回来, 大帅比</h2>

			<div className='info-list'>
				<div className='weather'>
					{weatherInfoList.map((item) => (
						<div
							key={item.text}
							className='wether-item'
						>
							<div>{item.date}</div>
							<div>{item.text}</div>
							{/* // todo: 温度, 天气及其icon映射 */}
						</div>
					))}
				</div>
			</div>

			<div className='statistics'>
				{clockInfoDataList.map((item, _index) => (
					<div
						key={item.title}
						className='statistics-item'
					>
						<div className='left'>
							<img
								src={item.icon}
								alt=''
							/>
						</div>

						<div className='right'>
							<div className='tiitle'>{item.title}</div>
							<div className='data'>
								<span className='current-value'>
									{/* // todo: 等待后面数据拿到后，改成真实数据 */}
									{(Math.random() % 10).toString().substring(2, 3) + item.unit}
								</span>
								<span className='max-value'>
									/ {item.maxValue}
									{item.unit}
								</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
