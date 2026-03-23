import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DATA_FILE = path.join(app.getPath("userData"), "skills.json");

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  const isDev = process.env.VITE_DEV_SERVER_URL;

  if (isDev) {
    console.log("🚀 DEV MODE");
    win.loadURL(process.env.VITE_DEV_SERVER_URL);
  } else {
    console.log("📦 PROD MODE");

    // chemin vers index.html buildé
    const filePath = path.join(__dirname, "dist", "index.html");

    // ⚡ Ajout de #/ pour HashRouter
    win.loadURL(`file://${filePath}#/`);
  }

  // Optionnel : ouvrir devtools en dev
  if (isDev) {
    win.webContents.openDevTools();
  }
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

// 📦 IPC pour sauvegarder les compétences
ipcMain.handle("get-skills", () => {
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
  } catch {
    return [];
  }
});

ipcMain.handle("save-skills", (event, skills) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(skills, null, 2));
  return skills;
});