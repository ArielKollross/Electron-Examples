const electron = require('electron')
const ipc = electron.ipcRenderer

const errorBtn = document.getElementById('errorBtn')

errorBtn.addEventListener('click', () =>{
    ipc.send('open-error-dialog')
})
