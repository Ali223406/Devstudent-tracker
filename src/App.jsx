import DevTracker from './Devtracker';
import './App.css';
import DarkModeToggleLayout from './components/DarkModeToggleLayout';
import Accueil from './pages/Accueil';
import Apropos from './pages/Apropos';
import Learning from './pages/Learning';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';

function App() {
  
  return (
    <DarkModeToggleLayout>
      <Router>
        <Navbar />
        <div className="content p-6">
          <Routes>
            <Route path="/" element={<Accueil />} />  // toutes les compétences
           
            <Route path="/learning/:topic?" element={<Learning />} />
            <Route path="/apropos" element={<Apropos />} />
          </Routes>
        </div>
      </Router>
    </DarkModeToggleLayout>
  );
}

export default App;