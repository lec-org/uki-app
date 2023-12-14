import { useRoutes } from 'react-router-dom'
import routers from './routers'
function App() {
	const outlet = useRoutes(routers)
	return outlet
}

export default App
