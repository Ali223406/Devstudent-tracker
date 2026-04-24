import DevTracker from './Devtracker';   // Import du composant DevTracker pour afficher les compétences et objectifs
import './App.css';    // Import du CSS 
import DarkModeToggleLayout from './components/DarkModeToggleLayout';  // Import du composant DarkModeToggleLayout pour gérer le thème sombre et clair 
import Accueil from './pages/Accueil';   // Import du composant Accueil pour la page d'accueil de l'application
import Apropos from './pages/Apropos';   // Import du composant Apropos pour la page à propos de l'application
import Learning from './pages/Learning';   // Import du composant Learning pour la page d'apprentissage de l'application
import { HashRouter as Router, Routes, Route } from 'react-router-dom';   // Import des composants de routage de React Router pour gérer la navigation entre les différentes pages de l'application
import Navbar from './pages/Navbar';

function App() {
  
  return (
    <DarkModeToggleLayout>  {/* Enveloppe l'application dans le composant DarkModeToggleLayout pour permettre la gestion du thème sombre et clair */}
      <Router>
        <Navbar />
        <div className="content p-6">
          <Routes>
            <Route path="/" element={<Accueil />} />   {/* Route pour la page d'accueil */}
           
            <Route path="/learning/:topic?" element={<Learning />} />  {/* Route pour la page de learning */}
            <Route path="/apropos" element={<Apropos />} />   {/* Route pour la page à propos */}
          </Routes>
        </div>
      </Router>
    </DarkModeToggleLayout> 
  );
}

export default App;