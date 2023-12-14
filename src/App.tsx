import { useOutlet } from 'react-router-dom'
import routers from './routers'
function App() {
	const outlet = useOutlet(routers)
	return outlet
}

export default App
