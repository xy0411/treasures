// console.log('Hello from Electron 👋');
console.log('Hello XiaoYang');

import path from 'path';
import { app, BrowserWindow, ipcMain, ipcRenderer, dialog, nativeTheme, Menu, MenuItem, Notification, globalShortcut } from 'electron';
import https from 'node:https';
import fs from 'node:fs';

// 定义全局变量获取 窗口实例
// 项目中的图片地址需要使用相对路径，不然图片会报404
let win: BrowserWindow | null

// 禁用GPU加速
app.disableHardwareAcceleration()

const createWindow = () => {
	win = new BrowserWindow({

		show: false,
		backgroundColor: '#d0dfe6', // 远天蓝 - 避免启动时白屏，开始视觉混乱启动

		// frame: false, // 无边框
		// titleBarStyle: 'hidden', // 无边框
		// transparent: true, // 全透明

		// width: 1000,
		// height: 800,

		// fullscreen: true, // 全屏

		autoHideMenuBar: false, // 是否隐藏菜单，默认 false

		// 允许html页面上的javascipt代码访问nodejs 环境api代码的能力（与node集成的意思）
		webPreferences: {
			devTools: true, // 是否可用devtools
			// 需要启用contextIsolation才能使用contextBridge应用编程接口
			contextIsolation: true,
			nodeIntegration: true,
			preload: path.join(__dirname, '../dist-electron/proload.js'), // 需加载dist-electron下的proload.js预加载文件
			nodeIntegrationInWorker: true, // 开启nodejs多线程
			javascript: true, // 默认为true,标准ts请填写
			webSecurity: false,
			plugins: true,
			defaultFontFamily: {
				standard: 'Mircrosoft YaHei'
			}, // 设置默认字体 - 失效
			webviewTag: true,
			navigateOnDragDrop: true, // 将文件或链接拖放到页面上时是否触发页面跳转
		}
	})

	win.maximize() // 最大化

	ipcMain.handle('ping', () => 'pong')

	win.loadFile(path.join(__dirname, '../dist/index.html'))

	// 这里打包环境下找到本机地址，不能修改
	win.loadURL(`${process.env['VITE_DEV_SERVER_URL']}`)

	// 官方说：在此事件后显示窗口将没有视觉闪烁，感觉没啥用-也可能是本项目应用不够复杂，看不出效果
	win.once('ready-to-show', () => {
		win.show()
	})
	// win.loadURL('https://ems.liando.cn/#/kzyLogin')

	// 加载vue url视本地环境而定，如http://localhost:5173 不写默认当前程序地址
	// win.loadURL('http://localhost:9894')

	// 打开开发者工具
	// win.webContents.openDevTools()
}

// 自定义菜单
// const menu = new Menu()
// menu.append(new MenuItem({
// 	label: 'Electron',
// 	submenu: [{
// 		role: 'help',
// 		accelerator: process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
// 		click: () => { console.log('Electron rocks!') }
// 	}]
// }))
// Menu.setApplicationMenu(menu)

// electron新增页面按钮切换主题色
ipcMain.handle('dark-mode:toggle', ()=>{
	if(nativeTheme.shouldUseDarkColors) {
		nativeTheme.themeSource = 'light'
	} else {
		nativeTheme.themeSource = 'dark'
	}
	return nativeTheme.shouldUseDarkColors
})
ipcMain.handle('dark-mode:system', ()=>{
	nativeTheme.themeSource = 'system'
})

// electron打包需关闭计算机安全防护软件

const NOTIFICATION_TITLE = '尊敬的用户'
const NOTIFICATION_BODY = '欢迎使用electron平台'

// 标准提醒内容
function showNotification () {
  new Notification({ title: NOTIFICATION_TITLE, body: NOTIFICATION_BODY }).show()
}

// 自定义提醒内容
export function selfUseShowNotification(content: string, title?: string) {
	new Notification({ title: title!=''?title:NOTIFICATION_TITLE, body: content, silent: true, timeoutType: 'default' }).show()
}

// 在Electron完成初始化时被触发
app.whenReady().then(() => {
	createWindow()
	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) createWindow()
	})
	ipcMain.on('set-title', handleSetTitle)
	ipcMain.handle('dialog:openFile', handleFileOpen)
	app.on('browser-window-created', () => selfUseShowNotification('以为您打开了一个新窗口', ''))

	// 注册一个'CommandOrControl+X' 快捷键监听器
	const ret_show = globalShortcut.register('CommandOrControl+Q', () => {
		win.hide()
		console.log('Q is pressed')
	})
	if (!ret_show) {
		console.log('registration failed')
	}
	const ret_hidden = globalShortcut.register('CommandOrControl+W', () => {
		win.show()
		console.log('W is pressed')
	})
	if (!ret_hidden) {
		console.log('registration failed')
	}
	// 检查快捷键是否注册成功
	console.log(globalShortcut.isRegistered('register success'))
}).then(showNotification)

// 应用失去焦点时触发
// app.on('browser-window-blur', ()=> {
// 	new Notification({ title: NOTIFICATION_TITLE, body: "应用已隐藏" }).show()
// })
// app.on('browser-window-focus', ()=> {
// 	new Notification({ title: NOTIFICATION_TITLE, body: "应用已显示" }).show()
// })

// 关闭所有窗口时退出应用
app.on('window-all-closed', () => {
	new Notification({ title: NOTIFICATION_TITLE, body: '期待您的再次使用' }).show()
	if (process.platform !== 'darwin') app.quit()
})

function handleSetTitle(event: any, title: string) {
	const webContents = event.sender
	const win = BrowserWindow.fromWebContents(webContents)
	if(win) win.setTitle(title)
}

// 文件拖拽
ipcMain.on('ondragstart', (event, filePath) => {
	event.sender.startDrag({
	  file: path.join(__dirname, filePath),
	  icon: iconName
	})

	let msg1 = 'ahahaha'
	// Create a new file to copy - you can also copy existing files.
	fs.writeFileSync(path.join(__dirname, 'drag-and-drop-1.md'), '# First file to test drag and drop,第一个文件测试拖拽功能')
	fs.writeFileSync(path.join(__dirname, 'drag-and-drop-2.md'), '# Second file to test drag and drop,第二个文件测试拖拽功能'+msg1)

})

// 文件拖拽
const iconName = path.join(__dirname, 'iconForDragAndDrop.png')
const icon = fs.createWriteStream(iconName)

https.get('https://img.icons8.com/ios/452/drag-and-drop.png', (response) => {
	response.pipe(icon)
})

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