const { app, BrowserWindow, ipcMain, Notification } = require("electron");
const path = require("path");

const isDev = !app.isPackaged;

if (isDev) {
  require("electron-reload")(__dirname, {
    electron: path.join(__dirname, "node_modules", ".bin", "electron"),
  });
}

ipcMain.on("notify", (_, message) => {
  new Notification({ title: "Notification", body: message }).show();
});

app.whenReady().then(() => {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: "white",
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.loadFile("index.html");
});
