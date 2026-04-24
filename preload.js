const { contextBridge, ipcRenderer } = require("electron"); // Importation des modules nécessaires pour la communication entre le processus principal et le processus de rendu

contextBridge.exposeInMainWorld("api", {   // Exposition d'une API sécurisée dans le contexte global de la fenêtre pour permettre au processus de rendu d'interagir avec le processus principal
  getSkills: () => ipcRenderer.invoke("get-skills"),  // Fonction pour récupérer les compétences depuis le processus principal
  saveSkills: (skills) => ipcRenderer.invoke("save-skills", skills)  // Fonction pour sauvegarder les compétences en envoyant les données au processus principal
});