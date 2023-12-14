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
