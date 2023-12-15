import Layout from '../layout'
import Home from '../pages/Home'
import CalendarView from '../pages/Calendar'
import ExtractCard from '../pages/ExtractCard'

const routers = [
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/home',
				element: <Home />,
			},
			{
				path: '/calendar',
				element: <CalendarView />,
			},
			{
				path: '/extractcard',
				element: <ExtractCard />,
			},
		],
	},
]

export default routers
