/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
// * 预加载
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('versions', {
	node: () => process.versions.node,
	chrome: () => process.versions.chrome,
	electron: () => process.versions.electron,
	// * IPC 进程间通信
	ping: () => ipcRenderer.invoke('ping'),
	// 除函数之外，我们也可以暴露变量
})

contextBridge.exposeInMainWorld('electronApi', {
	// * 发送消息
	send: (channel, data) => {
		let validChannels = [
			'createSuspensionMenu',
			'suspensionWindowMove',
			'getFilePath',
			'downloadFile',
		]
		if (validChannels.includes(channel)) {
			ipcRenderer.send(channel, data)
		}
	},
	// * 接收消息
	receive: (channel, func) => {
		let validChannels = ['replyFilePath']
		if (validChannels.includes(channel)) {
			ipcRenderer.on(channel, (event, ...args) => func(event, ...args))
		}
	},
	showItemInFolder: (url) => {
		shell.showItemInFolder(url)
	},
})
