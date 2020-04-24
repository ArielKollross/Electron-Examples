const {app,  BrowserWindow, ipcMain, dialog } = require('electron')


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

ipcMain.on('open-error', () =>{
    dialog.showErrorBox('An error message', 'Demo of an error message')
})


app.whenReady().then(createWindow)
