import { Link } from 'react-router-dom';  // Import du composant Link pour la navigation
import './Apropos.css';      // Import du CSS pour la page à propos

export default function Apropos() {      // Composant fonctionnel pour la page à propos
  return (            // Structure de la page à propos
    <div className="apropos-container"> 
      {/* En-tête */}
      <div className="apropos-header">
        <h2> À propos de DevStudent Tracker</h2>
        <h4>
          DevStudent Tracker est une application conçue pour vous aider à suivre votre progression
          en tant que développeur web et logiciel.
        </h4>
      </div>
        {/* Contenu principal */}
      <div className="apropos-content">
        <h4>
          Organisez vos compétences, vos objectifs et vos ressources pour un apprentissage clair et efficace.
        </h4>
        <h4>
          Commencez dès maintenant à ajouter vos compétences, objectifs et ressources pour suivre
          votre évolution étape par étape.
        </h4>
      </div>
        {/* Lien de retour à l'accueil */}
      <Link to="/" className="btn-return">
        ← Retour à l'accueil
      </Link>
    </div>
  );
}