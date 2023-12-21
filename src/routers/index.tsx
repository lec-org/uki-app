import Layout from '../layout'
import Home from '../pages/Home'
import CalendarView from '../pages/Calendar'
import ExtractCard from '../pages/ExtractCard'
import Suspension from '../pages/Suspension'

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
	{
		path: '/suspension',
		element: <Suspension />,
	},
]

export default routers
