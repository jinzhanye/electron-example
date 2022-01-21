const { shell } = require('electron')

const aHref = document.querySelector('#aHref')

aHref.onclick = function (e) {
  e.preventDefault()
  const href = this.getAttribute('href')
  shell.openExternal(href)
}
