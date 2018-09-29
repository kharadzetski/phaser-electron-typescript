import { app, BrowserWindow } from 'electron';
import { APP_WIDTH, APP_HEIGHT } from '@shared/constants';

let win;
const isDev = process.env.NODE_ENV === 'development';

app.on('ready', () => {
  win = new BrowserWindow({
    resizable: false
  });
  win.on('closed', () => app.quit());
  win.setContentSize(APP_WIDTH, APP_HEIGHT);
  const url = isDev ? 'http://localhost:8080' : `file://${__dirname}/index.html`;
  win.loadURL(url);
});
