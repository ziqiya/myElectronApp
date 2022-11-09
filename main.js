const { app, BrowserWindow } = require('electron');

function createWindow() {
  // 创建浏览器窗口
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // 加载index.html文件
  // win.loadFile("index.html");
  // 加载博客页面
  win.loadURL('http://114.106.163.51:33067/');
}

app.whenReady().then(() => {
  createWindow();

  // 如果没有窗口打开则打开一个窗口(mac)
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// window/linux 关闭所有窗口时退出应用
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
