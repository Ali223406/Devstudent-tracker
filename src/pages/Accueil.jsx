import { Link } from 'react-router-dom';
import notebookIcon from '../assets/notebook.jpg';
import './Accueil.css';
import { useNavigate } from 'react-router-dom';



export default function Accueil() {
 
  return (
     <div className="accueil">

      {/* Icône cahier */}
      <img src={notebookIcon} alt="Cahier Bleu" className="notebook-icon" />

      {/* Titre */}
      <h1 className="accueil-title">Bienvenue sur DevStudent Tracker</h1>

      {/* Paragraphes */}
      <p className="accueil-text">
        Votre compagnon pour suivre votre progression en tant que développeur.
      </p>

      <p className="accueil-text">
        Commencez dès maintenant à ajouter vos compétences, objectifs et ressources pour organiser votre apprentissage !
      </p>

     
      {/* BOUTON */}
      <button className="btn-learn" onClick={() => navigate("/learning")}>
        Commencer à apprendre →
      </button>

    </div>
  );
}