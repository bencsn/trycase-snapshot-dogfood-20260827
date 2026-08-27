const { app, BrowserWindow } = require("electron");
const path = require("node:path");

app.whenReady().then(() => {
  const window = new BrowserWindow({ width: 1000, height: 720, title: "Pulseboard Desktop" });
  window.loadFile(path.join(__dirname, "shell.html"));
});
