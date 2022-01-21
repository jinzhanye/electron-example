const BrowserWindow = require('electron').remote.BrowserWindow

const rigthTemplate = [
  { label: '复制' },
  { label: '粘贴' },
]
const m = remote.Menu.buildFromTemplate(rigthTemplate)

window.onload = function () {
  window.addEventListener('contextmenu', function (e) {
    alert(111);
    //阻止当前窗口默认事件
    // e.preventDefault()
    //把菜单模板添加到右键菜单
    // m.popup({ window: remote.getCurrentWindow() })
  })

  const btn = this.document.querySelector('#btn')

  btn.onclick = () => {
    newWin = new BrowserWindow({
      width: 500,
      height: 500,
    })

    newWin.loadFile('renderer/demo02/the-starry-sky.html')

    newWin.on('close', () => {
      newWin = null
    })
  }
}
