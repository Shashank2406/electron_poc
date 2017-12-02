
const {app,BrowserWindow} = require('electron');
const path = require('path');
const url  = require('url');

let win;

function createWindow(){
    //Create Browser Window
    win = new BrowserWindow({width:800,height:600})
    
    //Load Index.html file
    win.loadURL(url.format({
        pathname: path.join(__dirname,'index.html'),
        protocol:'file:',
        slahes:true
    }));

    //Open Dev Tools
    win.webContents.openDevTools()

    win.on('closed',()=>{
        win = null
    })
}

//Run create window function 
app.on('ready', createWindow);

app.on('window-all-closed',()=>{
    if(process.platform !== 'darwin')
    {
        app.quit()
    }
})