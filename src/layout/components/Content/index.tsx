import { Outlet } from 'react-router-dom'
export default function Content() {
	return (
		<div className='layout-content-outlet'>
			<Outlet></Outlet>
		</div>
	)
}
