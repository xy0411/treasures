console.log('Hello from Electron 👋');

import path from 'path';
import { app, BrowserWindow, ipcMain, ipcRenderer, dialog } from 'electron';

// 定义全局变量获取 窗口实例
// 项目中的图片地址需要使用相对路径，不然图片会报404
let win: BrowserWindow | null

const createWindow = () => {
	win = new BrowserWindow({
		// width: 1000,
		// height: 800,

		// fullscreen: true, // 全屏

		autoHideMenuBar: true, // 是否隐藏菜单，默认 false

		// 允许html页面上的javascipt代码访问nodejs 环境api代码的能力（与node集成的意思）
		webPreferences: {
			devTools: true,
			// 需要启用contextIsolation才能使用contextBridge应用编程接口
			contextIsolation: true,
			nodeIntegration: true,
			preload: path.join(__dirname, '../dist-electron/proload.js') // 需加载dist-electron下的proload.js预加载文件
		}
	})

	win.maximize() // 最大化

	ipcMain.handle('ping', () => 'pong')

	win.loadFile(path.join(__dirname, '../dist/index.html'))

	// 这里打包环境下找到本机地址，不能修改
	win.loadURL(`${process.env['VITE_DEV_SERVER_URL']}`)

	// 加载vue url视本地环境而定，如http://localhost:5173
	// win.loadURL('http://localhost:5173')

	// 打开开发者工具
	// win.webContents.openDevTools()
}

// electron打包需关闭计算机安全防护软件

// 在Electron完成初始化时被触发
app.whenReady().then(() => {
	createWindow()
	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) createWindow()
	})
	ipcMain.on('set-title', handleSetTitle)
	ipcMain.handle('dialog:openFile', handleFileOpen)
})

// 关闭所有窗口时退出应用
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit()
})

function handleSetTitle(event: any, title: string) {
	const webContents = event.sender
	const win = BrowserWindow.fromWebContents(webContents)
	if(win) win.setTitle(title)
}

async function handleFileOpen() {
	const { canceled, filePaths } = await dialog.showOpenDialog({
		properties: ['openFile']
	})
	if(canceled) {
		return
	} else {
		return filePaths[0]
	}
}