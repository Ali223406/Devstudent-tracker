import { Link } from 'react-router-dom';     // Import du composant Link pour la navigation
import notebookIcon from '../assets/notebook.jpg';  // Import de l'icône du cahier
import './Accueil.css';         // Import du CSS pour la page d'accueil
import { useNavigate } from 'react-router-dom';           // Import du hook useNavigate pour la navigation programmatique



export default function Accueil() {   // Utilisation du hook useNavigate pour la navigation programmatique
  const navigate = useNavigate();    // Fonction pour naviguer vers la page d'apprentissage
 
  return (                 // Structure de la page d'accueil
     <div className="accueil">            
       <img src={notebookIcon} alt="Cahier Bleu" className="notebook-icon" />     
      {/* Image d'icône du cahier bleu */}
    
      
      
     

      {/* Titre */}
      <h3 className="accueil-title">Bienvenue sur DevStudent Tracker</h3>

      {/* Paragraphes */}
      <h4 className="accueil-text">
        Votre compagnon pour suivre votre progression en tant que développeur.
      </h4>

      <h4 className="accueil-text">
        Commencez dès maintenant à ajouter vos compétences, objectifs et ressources pour organiser votre apprentissage !
      </h4>

     
      {/* BOUTON */}
      <button className="btn-learn" onClick={() => navigate("/learning")}>
        Commencer à apprendre →
      </button>

    </div>
  );
}