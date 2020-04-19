const electron = require("electron");
const { v4 : uuidv4 } = require('uuid');
uuidv4();
const {app, BrowserWindow, Menu, ipcMain} = electron;

let homeWindow;
let dataWindow;
let riwayatWindow;

let allRiwayat = [];

app.on("ready",  () => {
    homeWindow = new BrowserWindow({
       webPreferences : {
           nodeIntegration : true
        },
        title : "Aplikasi Konvert Suhu"  
    });

    homeWindow.loadURL(`file://${__dirname}/home.html`);
    homeWindow.on("closed", () => {
        app.quit();
        homeWindow = null;
    });

    const mainMenu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(mainMenu);

});

const dataWindowCreator = () => {
    dataWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 700,
        height: 500,
        title: "Konverter"
    });
    dataWindow.setMenu(null);
    dataWindow.loadURL(`file://${__dirname}/data.html`);
    dataWindow.on ("closed", () => (dataWindow = null))
};
const riwayatWindowCreator = () => {
    riwayatWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 300,
        height: 500,
        title: "Riwayat"
    });
    riwayatWindow.setMenu(null);
    riwayatWindow.loadURL(`file://${__dirname}/riwayat.html`);
    riwayatWindow.on ("closed", () => (riwayatWindow = null))
};

ipcMain.on("data_suhu:data", (event, data1)=>{
    data1["id"] = uuidv4();
    data1["done"] = 0;
    allRiwayat.push(data1);
    
    dataWindow.close();
    console.log (allRiwayat);
});
ipcMain.on("data1:request:riwayat", event =>{
    riwayatWindow.webContents.send('data1:response:riwayat',allRiwayat);
});


const menuTemplate = [{
    label : "File",
    submenu : [
        {
            label : "Konverter",
            click(){
                dataWindowCreator();
            }
        },
        {
            label : "Riwayat",
            click(){
                riwayatWindowCreator();
            }
        },
        {
            label: "Quit",
            accelerato : process.platform === "darwin" ? "Command+Q" :
            "Ctrl+Q",
            click(){
                app.quit(); 
            }
        }
    ]
}];