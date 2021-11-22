const { app, BrowserWindow } = require("electron");
const path = require("path");
require("electron-reload")(__dirname, {
  electron: path.join(__dirname, "node_modules", ".bin", "electron"),
});

app.whenReady().then(() => {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: "white",
  });

  win.loadFile("index.html");
});
