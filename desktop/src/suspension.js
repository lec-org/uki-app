/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { BrowserWindow, screen, ipcMain } = require('electron/main')
const path = require('path')
const isDevelopment = process.env.NODE_ENV === 'development'

function createSuspensionWindow() {
	const win = new BrowserWindow({
		width: 120,
		height: 120,
		minHeight: 120,
		minWidth: 120,
		type: 'toolbar',
		show: false,
		frame: false, // * 取消显示标题栏与控制按钮
		titleBarStyle: 'hidden',
		resizable: false, // * 禁止缩放窗口
		alwaysOnTop: true, // * 始终保持在最顶层
		transparent: true, // * 支持透明
		webPreferences: {
			// *用于配置窗口的 Web 集成选项,例如启用 Node.js、预加载脚本等。

			nodeIntegration: true, // * 是否继承Node
			contextIsolation: false, // * 是否上下文隔离
			preload: path.resolve(__dirname, './preload.js'),
		},
		icon: path.resolve(__dirname, '../assets/logo.png'),
	})
	//通过获取用户屏幕的宽高来设置悬浮球的初始位置
	const { left, top } = {
		left: screen.getPrimaryDisplay().workAreaSize.width - 160,
		top: screen.getPrimaryDisplay().workAreaSize.height - 160,
	}
	win.setPosition(left, top) //设置悬浮球位置

	if (isDevelopment) {
		win.loadURL('http://localhost:5173/suspension')
	} else {
		const entryPath = path.resolve(__dirname, '../../build/index.html')
		win.loadFile(entryPath)
	}

	win.once('ready-to-show', () => {
		win.show()
	})

	ipcMain.on('suspensionWindowMove', (_event, message) => {
		win.setPosition(message.x, message.y)
	})
}
module.exports = { createSuspensionWindow }
