const electron = require('electron')  //引入electron模块

const app = electron.app   // 创建electron引用

const BrowserWindow = electron.BrowserWindow;  //创建窗口引用

let mainWindow = null;  //声明要打开的主窗口

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 400,
    height: 400,
    webPreferences: {
      nodeIntegration: true
    }
  })   //设置打开的窗口大小

  mainWindow.loadFile('renderer/demo03/index.html')  //加载那个页面

  const BrowserView = electron.BrowserView //引入BrowserView
  const view = new BrowserView()   //new出对象
  mainWindow.setBrowserView(view)   // 在主窗口中设置view可用
  view.setBounds({x:0,y:100,width:1200, height:800})  //定义view的具体样式和位置
  view.webContents.loadURL('https://jspang.com')  //wiew载入的页面

  //监听关闭事件，把主窗口设置为null
  mainWindow.on('closed', () => {
    mainWindow = null
  })

  mainWindow.webContents.openDevTools()

  require('./main/menu')
})

