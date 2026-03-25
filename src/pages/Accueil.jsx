import { Link } from 'react-router-dom';
import notebookIcon from '../assets/notebook.jpg';
import './Accueil.css';
import { useNavigate } from 'react-router-dom';



export default function Accueil() {
  const navigate = useNavigate();
 
  return (
     <div className="accueil">
       <img src={notebookIcon} alt="Cahier Bleu" className="notebook-icon" />
      
     

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