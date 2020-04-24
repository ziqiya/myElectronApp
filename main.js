const { app, BrowserWindow } = require("electron");

function createWindow() {
  // 创建浏览器窗口
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // 加载index.html文件
  // win.loadFile("index.html");
  // 加载博客页面
  win.loadURL("https://www.ruanxusong.com");
}

app.whenReady().then(createWindow);
