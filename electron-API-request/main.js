const {app,  BrowserWindow } = require('electron')

function createWindow () {

    let win = new BrowserWindow({
        height: 200,
        width: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.loadFile('index.html')

   // win.webContents.openDevTools()
}

app.whenReady().then(createWindow)
