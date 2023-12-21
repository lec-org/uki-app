import React, { useEffect } from 'react'

import { ipcRendererSend } from '../../../desktop/src/desktopUtils'

import './index.scss'

let biasX = 0
let biasY = 0

const moveEvent = (e: { screenX: number; screenY: number }) => {
	ipcRendererSend('suspensionWidowMove', {
		x: e.screenX - biasX,
		y: e.screenY - biasY,
	})
}

export default function Suspension() {
	const initSuspension = () => {
		const suspensionDom = document.getElementById('desktop-suspension')
		suspensionDom?.addEventListener('mousedown', (e) => {
			switch (e.button) {
				case 0:
					biasX = e.x
					biasY = e.y
					document.addEventListener('mousemove', moveEvent)
					break
				case 2:
					ipcRendererSend('createSuspensionMenu')
					break
			}
		})

		suspensionDom?.addEventListener('mouseup', () => {
			biasX = 0
			biasY = 0
			document.addEventListener('mousemove', moveEvent)
		})
	}

	useEffect(() => {
		initSuspension()
	}, [])

	return <div id='desktop-suspension'></div>
}
