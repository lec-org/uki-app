import { weatherInfoList, clockInfoDataList } from '../config'

import './index.scss'
export default function ClockInfo({ nickName }: { nickName: string }) {
	return (
		<div className='clock-info'>
			{/* 欢迎语 */}
			<h2>🎉 欢迎回来, {nickName}</h2>

			<div className='info-list'>
				{/* 头部左侧天气栏 */}
				<div className='weather'>
					{weatherInfoList.map((item) => (
						<div
							key={item.text}
							className='weather-item'
						>
							<div>{item.date}</div>
							<div>{item.text}</div>
							{/* // todo: 温度, 天气及其icon映射 */}
						</div>
					))}
				</div>

				{/* 头部右侧信息栏 */}
				<div className='statistics'>
					{clockInfoDataList.map((item, _) => (
						<div
							key={item.title}
							className='statistics-item'
						>
							<div className='left'>
								<img src={item.icon} />
							</div>

							<div className='right'>
								<div className='title'>{item.title}</div>
								<div className='data'>
									<span className='current-value'>
										{/* // todo: 等待后面数据拿到后，改成真实数据 */}
										{(Math.random() % 10).toString().substring(2, 3) +
											item.unit}
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
		</div>
	)
}
