import { StrictMode } from 'react'  // Import du composant StrictMode pour activer les vérifications strictes en développement
import { createRoot } from 'react-dom/client'   // Import de la fonction createRoot pour rendre l'application dans le DOM
import './index.css'   // Import du CSS global pour l'application
import App from './App.jsx'   // Import du composant principal App qui contient la structure de l'application et les routes

createRoot(document.getElementById('root')).render(   // Rendu de l'application dans l'élément avec l'id "root" du DOM
  <StrictMode>  
    <App />
  </StrictMode>,
)
