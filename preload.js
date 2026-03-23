const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  getSkills: () => ipcRenderer.invoke("get-skills"),
  saveSkills: (skills) => ipcRenderer.invoke("save-skills", skills)
});