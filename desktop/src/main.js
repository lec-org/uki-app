/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { BrowserWindow, globalShortcut } = require('electron/main')
const path = require('path')
const isDevelopment = process.env.NODE_ENV === 'development'

function createWindow() {
	const win = new BrowserWindow({
		width: 1160,
		height: 752,
		minHeight: 632,
		minWidth: 960,
		show: false,
		frame: false, // * 取消显示标题栏与控制按钮
		title: 'Uki', // * 窗口标题(实际上在此无用)
		webPreferences: {
			// *用于配置窗口的 Web 集成选项,例如启用 Node.js、预加载脚本等。
			nodeIntegration: true,
			preload: path.resolve(__dirname, './preload.js'),
		},
		icon: path.resolve(__dirname, '../assets/logo.png'),
		alwaysOnTop: true, // * 始终保持在最顶层
	})

	if (isDevelopment) {
		win.loadURL('http://localhost:5173/')
	} else {
		const entryPath = path.resolve(__dirname, '../../build/index.html')
		win.loadFile(entryPath)
	}

	win.once('ready-to-show', () => {
		win.show()
		let isShow = true
		// * 创建全局键盘快捷键
		globalShortcut.register('Alt+U', () => {
			// * 按Alt + U 进行主界面的显示与关闭
			// * 悬浮窗恒定显示
			isShow = !isShow
			if (!isShow) win.hide() // * 隐藏
			else win.show() // * 显示
		})
	})
}
module.exports = { createWindow }
