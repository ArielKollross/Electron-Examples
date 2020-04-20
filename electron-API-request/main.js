const {app,  BrowserWindow } = require('electron')

function createWindow () {

    let win = new BrowserWindow({
        height: 350,
        width: 900,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.loadFile('index.html')

   win.webContents.openDevTools()
}

app.whenReady().then(createWindow)
