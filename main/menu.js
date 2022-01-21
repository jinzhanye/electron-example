const { Menu, BrowserWindow } = require('electron')

const template = [
  {
    label: '五月天',
    submenu: [
      {
        label: '星空',
        accelerator:`ctrl+n`,
        click: () => {
          win = new BrowserWindow({
            width: 500,
            height: 500,
            webPreferences: {
              nodeIntegration: true
            }
          })
          win.loadFile('renderer/demo02/the-starry-sky.html')
          win.on('closed', () => {
            win = null
          })

        }
      },
      { label: '人生海海' },
    ]
  },
  {
    label: '陈奕迅',
    submenu: [
      { label: '红玫瑰' },
      { label: '白玫瑰' }
    ]
  },
]

const m = Menu.buildFromTemplate(template)

Menu.setApplicationMenu(m)
