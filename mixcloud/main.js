const { app, BrowserWindow } = require('electron');

function createWindow() {
  // Create the browser window
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: __dirname + '/icon.ico',
    webPreferences: {
      nodeIntegration: true // Enable Node.js integration in the renderer process
    }
  });

  // Load the Mixcloud website
  mainWindow.loadURL('https://www.mixcloud.com/');

  // Open DevTools (optional)
  // mainWindow.webContents.openDevTools();
}

// When Electron has finished initialization and is ready to create browser windows
app.on('ready', createWindow);

// Quit when all windows are closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
