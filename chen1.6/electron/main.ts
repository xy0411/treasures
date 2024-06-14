// console.log('Hello from Electron 👋');
// electron打包需关闭计算机安全防护软件
console.log('Hello XiaoYang');

import path from 'path';
import {
	app, BrowserWindow, ipcMain, ipcRenderer,
	dialog, nativeTheme, Menu, MenuItem, Notification,
	globalShortcut, Tray, nativeImage, MenuItemConstructorOptions
} from 'electron';
import https from 'node:https';
import fs from 'node:fs';

// 定义全局变量获取 窗口实例
// 项目中的图片地址需要使用相对路径，不然图片会报404
let win: BrowserWindow | null

// 启动进度条
let progressInterval;

const iconSrc = path.join(__dirname, '../public/images/monkey.png'); // 路径问题，本地需用path来获取路径
const tray_icon = nativeImage.createFromPath(iconSrc)

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

	// 后期想办法优化一下这个进度条
	const INCREMENT = 0.03
	const INTERVAL_DELAY = 100 // ms
	let c = 0
	progressInterval = setInterval(() => {
		// update progress bar to next value
		// values between 0 and 1 will show progress, >1 will show indeterminate or stick at 100%
		win.setProgressBar(c)

		// increment or reset progress bar
		if (c < 2) {
			c += INCREMENT
		} else {
			c = (-INCREMENT * 5) // reset to a bit less than 0 to show reset state
		}
	}, INTERVAL_DELAY)

	// 设置用户缩略图
	win.setThumbarButtons([
		{
		tooltip: 'lefting',
		icon: nativeImage.createFromPath(iconSrc),
		click () {}
		}, {
		tooltip: 'righting',
		icon: nativeImage.createFromPath(iconSrc),
		// flags: ['enabled', 'dismissonclick'],
		click () {}
		}
	])

	// win.setOverlayIcon(nativeImage.createFromPath(iconSrc), 'Description for overlay') // 启动应用任务个数图标专用

	win.once('focus', () => win.flashFrame(false))
	win.flashFrame(true)

	// win.loadURL('https://ems.liando.cn/#/kzyLogin')

	// 加载vue url视本地环境而定，如http://localhost:5173 不写默认当前程序地址
	// win.loadURL('http://localhost:9894')

	// 打开开发者工具
	// win.webContents.openDevTools()
}

// 设置用户任务
app.setUserTasks([
	{
	  program: process.execPath,
	  arguments: '--new-window',
	  iconPath: process.execPath,
	  iconIndex: 0,
	  title: 'New Window',
	  description: 'Create a new window'
	}
])

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
	// console.log(globalShortcut.isRegistered('register success')) // 这里报了个错

	// 启动托盘
	const tray = new Tray(tray_icon)
	// type = 'normal' | 'separator' | 'checkbox' | 'radio' | 'submenu'
	// role是原生自带的方法
	let tempMenu: MenuItemConstructorOptions[] = [
		{ label: '我在线上', type: 'normal', icon: '', click(menuItem, browserWindow, event) { console.log("success - i am online"); } },
		{ label: 'Q我吧', type: 'normal' },
		{ label: '离开', type: 'normal' },
		{ label: '忙碌', type: 'normal' },
		{ label: '请勿打扰', type: 'normal' },
		{ label: '隐身', type: 'normal' },
		{ label: '离线', type: 'normal' },
		{
			label: '添加状态信息', submenu: [
				{ label: '小休', type: 'normal' },
				{ label: '下班了', type: 'normal' },
			]
		},
		{ type: 'separator' },
		{ label: '关闭所有声音', type: 'checkbox', checked: true },
		{ label: '关闭头像闪动', type: 'checkbox' },
		{ type: 'separator' },
		{ label: '锁定Electron', type: 'normal', enabled: false, sublabel: '' },
		{ type: 'separator' },
		{ label: '打开主面板', type: 'normal' },
		{ label: '你想看到吗', type: 'normal', visible: false },
		{ label: '退出', type: 'normal', role: 'quit' }
	]
	tempMenu.forEach((it, index) => {
		it.id = index.toString()
	})

	const contextMenu = Menu.buildFromTemplate(tempMenu)
	tray.setContextMenu(contextMenu)

	tray.setToolTip('丢丢丢丢丢丢')
	tray.setTitle('This is my title')
	// }).then(showNotification)
}).then()

// 应用失去焦点时触发
// app.on('browser-window-blur', ()=> {
// 	new Notification({ title: NOTIFICATION_TITLE, body: "应用已隐藏" }).show()
// })
// app.on('browser-window-focus', ()=> {
// 	new Notification({ title: NOTIFICATION_TITLE, body: "应用已显示" }).show()
// })

function handleSetTitle(event: any, title: string) {
	const webContents = event.sender
	const win = BrowserWindow.fromWebContents(webContents)
	if (win) win.setTitle(title)
}

// 文件拖拽
const iconName = path.join(__dirname, 'iconForDragAndDrop.png')
const ddicon = fs.createWriteStream(iconName)
https.get('https://img.icons8.com/ios/452/drag-and-drop.png', (response) => {
	response.pipe(ddicon)
})

ipcMain.on('ondragstart', (event, filePath) => {
	event.sender.startDrag({
		file: path.join(__dirname, filePath),
		icon: iconName
	})

	let msg1 = 'ahahaha'
	// Create a new file to copy - you can also copy existing files.
	fs.writeFileSync(path.join(__dirname, 'drag-and-drop-1.md'), '# First file to test drag and drop,第一个文件测试拖拽功能')
	fs.writeFileSync(path.join(__dirname, 'drag-and-drop-2.md'), '# Second file to test drag and drop,第二个文件测试拖拽功能' + msg1)

})

async function handleFileOpen() {
	const { canceled, filePaths } = await dialog.showOpenDialog({
		properties: ['openFile']
	})
	if (canceled) {
		return
	} else {
		return filePaths[0]
	}
}

app.on('before-quit', () => {
	clearInterval(progressInterval)
	new Notification({ title: NOTIFICATION_TITLE, body: '期待您的再次使用' }).show()
})

// 关闭所有窗口时退出应用
app.on('window-all-closed', () => {
	// win.setThumbarButtons([]) // 关闭时会报错不存在
	app.setUserTasks([])
	if (process.platform !== 'darwin') app.quit()
})

// 提醒
const NOTIFICATION_TITLE = '尊敬的用户'
const NOTIFICATION_BODY = '欢迎使用electron平台'

// 标准提醒内容
function showNotification() {
	new Notification({ title: NOTIFICATION_TITLE, body: NOTIFICATION_BODY }).show()
}

// 自定义提醒内容
export function selfUseShowNotification(content: string, title?: string) {
	new Notification({ title: title != '' ? title : NOTIFICATION_TITLE, body: content, silent: true, timeoutType: 'default' }).show()
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

// electron新增页面按钮切换主题色 - layout.vue中目前已隐藏按钮
// ipcMain.handle('dark-mode:toggle', () => {
// 	if (nativeTheme.shouldUseDarkColors) {
// 		nativeTheme.themeSource = 'light'
// 	} else {
// 		nativeTheme.themeSource = 'dark'
// 	}
// 	return nativeTheme.shouldUseDarkColors
// })
// ipcMain.handle('dark-mode:system', () => {
// 	nativeTheme.themeSource = 'system'
// })