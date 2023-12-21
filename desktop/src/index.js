/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { BrowserWindow, app, ipcMain } = require('electron/main')
const { Tray, Menu, nativeImage } = require('electron')
const { createWindow } = require('./main.js')
const { createSuspensionWindow } = require('./suspension')

app.whenReady().then(() => {
	// * 进程间通信
	ipcMain.handle('ping', () => 'pong')
	// * 创建窗口
	// * 主界面
	createWindow()
	// * 悬浮窗
	createSuspensionWindow()
	// * 系统托盘
	const icon = nativeImage.createFromPath(__dirname + '../../public/vite.svg')
	const tray = new Tray(icon)

	// * 上下文菜单
	const contextMenu = Menu.buildFromTemplate([
		{ label: 'Item1', type: 'radio' },
		{ label: 'Item2', type: 'radio' },
		{ label: 'Item3', type: 'radio', checked: true },
		{ label: 'Item4', type: 'radio' },
	])
	tray.setContextMenu(contextMenu)

	// * 托盘工具提示和标题
	tray.setToolTip('This is my application')
	tray.setTitle('This is my title')

	// * 如果没有窗口则打开一个窗口
	app.on('active', () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow()
			createSuspensionWindow()
		}
	})
})

// * <===管理窗口的生命周期===>

// * 当关闭所有窗口时退出窗口
app.on('window-all-closed', () => {
	if (process.platform != 'darwin') {
		console.log('window-all-closed')
		app.quit()
	}
})
